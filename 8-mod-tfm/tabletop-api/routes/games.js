import express from 'express'
import repo from '../services/tabletop-repo.js'
import debugLib from 'debug';
import upload from '../middlewares/file-upload.js';
import { ApiError } from '../helpers/ApiError.js';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const debug = debugLib("api:games")

var router = express.Router();

/* GET Games. */
router.get('', async function (req, res, next) {
  try {
    const filter = {
      title: req.query.title,
      author: req.query.author,
    };
    const result = await repo.getByFilter(filter);
    res.send(result);
  } catch (error) {
    next(error);
  }
});

/* GET Games por id. */
router.get('/:id', async function (req, res, next) {
  try {
    const result = await repo.getById(req.params.id);
    res.send(result);
  } catch (error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const game = req.body;

    const result = await repo.updateGame(id, game);
    res.send(result);
  } catch (error) {
    next(error);
  }
})


router.put('/:id/image', upload.single('image'), async (req, res, next) => {
  try {
    const { id } = req.params;
    let url = undefined;
    if (req.file) {
      url = `/${process.env.FOLDER_IMAGES_TEMP}/${req.file.filename}`;
    }

    if (url) {
      debug('Imagen recibida en', url);

      const game = await repo.getById(id);
      if (!game)
        throw new ApiError(404, 'No se encuentra el juego');


      const fileExt = path.extname(req.file.originalname);

      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);
      const rutaUrl = `/${process.env.FOLDER_IMAGES}/${id}${fileExt}`;
      const rutaFisica = path.join(__dirname, `..${rutaUrl}`);
      fs.renameSync(path.join(req.file.destination, req.file.filename), rutaFisica); // Renombramos el archivo

      await repo.updateGameImage(id, rutaUrl);
      const updated = await repo.getById(id);
      res.send(updated);
    }
    else {
      throw new ApiError(400, "No se pudo interpretar la ruta del archivo");
    }
  } catch (error) {
    next(error);
  }
})

/* Post games */
router.post('', async (req, res, next) => {
  try {
    const game = req.body;
    const skipEquality = false;
    if (skipEquality) {
      skipEquality = JSON.parse(req.query.skipEquality);
    }

    const result = await repo.createGame(game, skipEquality);
    res.send(result);
  } catch (error) {
    next(error);
  }
})


/* DELTE games*/
router.delete('/:id', async (req, res, next) => {
  try {
    const result = await repo.deleteById(req.params.id);
    res.send(result);
  } catch (error) {
    next(error);
  }
})
export default router;

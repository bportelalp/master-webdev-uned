import multer from 'multer';
import path from 'path';
import { ApiError } from '../helpers/ApiError.js';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, process.env.FOLDER_IMAGES); //
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, (new Date()).toISOString().replace(/[-T:.]/g, '').slice(0, 17) + ext); 
  }
});

// Filtrar solo imágenes
const fileFilter = (req, file, cb) => {
  const allowedTypes = new RegExp(process.env.FOLDER_IMAGES_ALLOWED_TYPES);
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new ApiError(400,'Solo se permiten imágenes'));
  }
};

const upload = multer({ storage, fileFilter });

export default upload;

import express from 'express'
import debugLib from 'debug';
import repo from '../services/game-results-repo.js'
import validator from '../middlewares/body-validator.js';
import { ApiError } from '../helpers/ApiError.js';
import { validationResult, query, param } from 'express-validator';

var router = express.Router();

const validatorQueryGetResults = [
    param('id').notEmpty().withMessage('Debes enviar un id como parámetro'),
    param('id').isString().isLength({ min: 24, max: 24 }).withMessage('id debe ser un ID de 24 caracteres'),
    query('fromDate').notEmpty().withMessage('fromDate es obligatorio en la query'),
    query('fromDate').isISO8601().withMessage('fromDate debe ser una fecha válida en formato ISO 8601'),
    query('toDate').notEmpty().withMessage('toDate es obligatorio en la query'),
    query('toDate').isISO8601().withMessage('toDate debe ser una fecha válida en formato ISO 8601'),
]

router.get('/:id', validatorQueryGetResults, async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            throw new ApiError(400, "Hay errores de validación en los datos", { errors: errors.array() });

        const result = await repo.getResults(req.params.id, req.query.fromDate, req.query.toDate);
        res.send(result);

    } catch (error) {
        next(error);
    }
})

router.post('', validator.validateGameResult(), (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty())
            throw new ApiError(400, "Hay errores de validación en los datos", { errors: errors.array() });

        repo.addResult(req.body);
        res.status(201).send();

    } catch (error) {
        next(error);
    }
})

export default router;

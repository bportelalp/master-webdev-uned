
import { body } from 'express-validator';
const validateGame = () => {
    return [
        body('_id').optional().isString().isLength({ min: 24, max: 24 }).withMessage('_id debe ser un ID de 24 caracteres'),

        body('title').isString().notEmpty().withMessage('Debes proporcionar un título'),

        body('description').isString().notEmpty().withMessage('Debes proporcionar una descripción'),

        body('authors').isArray().withMessage('authors debe ser un array').custom((authors) => {
            authors.forEach((author, index) => {
                if (typeof author !== 'string' || author.trim() === '') {
                    throw new Error('Algún autor no es un string no nulo');
                }
            });
            return true;
        }),

        body('publisher').isString().notEmpty().withMessage('Debes proporcionar un valor en publisher'),

        body('players').isObject().withMessage('players debe ser un objeto con campos min y max').custom((players) => {
            if (typeof players.min !== 'number' || players.min < 1) {
                throw new Error('players.min debe ser un número mayor o igual a 1');
            }
            if (typeof players.max !== 'number' || players.max < players.min) {
                throw new Error('players.max debe ser un número mayor o igual a players.min');
            }
            return true;
        }),

        body('playTime').isInt({ min: 1 }).withMessage('playTime debe ser un número entero mayor a 0'),

        body('mechanics').isArray().withMessage('mechanics debe ser un array').custom((mechanics) => {
            mechanics.forEach((mechanic, index) => {
                if (typeof mechanic !== 'string' || mechanic.trim() === '') {
                    throw new Error('Alguna mecánica no es correcta');
                }
            });
            return true;
        }),

    ];
};

const validateGameResult = () => {
    return [
        body('gameId').isString().isLength({ min: 24, max: 24 }).withMessage('gameId debe ser un ID de 24 caracteres'),

        body('playedOn').optional().isISO8601().withMessage('playedOn debe ser una fecha válida'),

        body('results').isArray().withMessage('results debe ser un array').custom((results) => {
            results.forEach((result, index) => {

                if (typeof result.player !== 'string' || result.player.trim() === '') {
                    throw new Error(`El nombre de jugador no tiene el formato correcto`);
                }

                if (!Array.isArray(result.resultItems)) {
                    throw new Error(`Debes proporcionar resultItems como array de elementos`);
                }

                result.resultItems.forEach((item, itemIndex) => {
                    if (typeof item.name !== 'string' || item.name.trim() === '') {
                        throw new Error(`Un item no tiene nombre correcto`);
                    }
                    if (typeof item.score !== 'number' || item.score < 0) {
                        throw new Error(`El score de un item no tiene el número correcto`);
                    }
                });

                // Validar globalResult
                if (typeof result.globalResult !== 'number' || result.globalResult < 0) {
                    throw new Error(`Debes proporcionar un resultado global`);
                }

                // Validar win
                if (typeof result.win !== 'boolean') {
                    throw new Error(`win en la posición ${index + 1} debe ser un booleano`);
                }
            });

            return true;  // La validación pasó
        })
    ];
};

export default {
    validateGameResult,
    validateGame
}
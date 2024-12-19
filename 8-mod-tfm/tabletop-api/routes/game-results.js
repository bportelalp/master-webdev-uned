import express from 'express'
import debugLib from 'debug';
import repo from '../services/game-results-repo.js'


const debug = debugLib("api:games")

var router = express.Router();

router.post('', (req, res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
})

export default router;

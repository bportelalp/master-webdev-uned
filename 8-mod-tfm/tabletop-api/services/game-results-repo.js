import { ObjectId } from "mongodb";
import db from "./mongodb-connection.js";
import debugLib from 'debug'
import { ApiError } from '../helpers/ApiError.js'
const debug = debugLib("api:repo");

async function addResult(data) {
    await _checkGameExist(data.gameId);
    data.playedOn = new Date(data.playedOn); // Fuerza formato fecha
    await db.collection('game_results').insertOne(data);
}

async function getResults(gameId, from, to) {
    await _checkGameExist(gameId);
    const query = {
        gameId: gameId,
        playedOn: {
            $gte: new Date(from),
            $lte: new Date(to)
        }
    };
    const results = await db.collection('game_results').find(query).toArray();
    return results;
}

async function _checkGameExist(id) {
    const game = await db.collection('games').findOne({
        _id: _validateAndGetId(id)
    })
    if (!game) {
        throw new ApiError(400, "El juego no existe");
    }
}

function _validateAndGetId(id) {
    if (!ObjectId.isValid(id)) {
        debug('Intento de buscar juego con id inválido:', id);
        throw new ApiError(400, "El formato de id no es válido");
    }
    return ObjectId.createFromHexString(id);
}
export default {
    addResult,
    getResults
}
import { ObjectId } from "mongodb";
import db from "./mongodb-connection.js";
import debugLib from 'debug'
import { ApiError } from '../helpers/ApiError.js'
const debug = debugLib("api:repo");

async function addResult(data) {
    _checkGameExist(data.gameId);
    await db.collection('game_results').insertOne(data);
}


async function _checkGameExist(id) {
    const game = await db.collection('games').findOne({
        _id: _validateAndGetId(id)
    })
    if (!game)
        throw new ApiError(400, "No se puede insertar resultados de un juego que no existe");
}

function _validateAndGetId(id) {
    if (!ObjectId.isValid(id)) {
        throw new ApiError(400, "El formato de id no es válido");
    }
    return ObjectId.createFromHexString(id);
}
export default {
    addResult
}
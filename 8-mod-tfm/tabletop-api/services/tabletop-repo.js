import { ObjectId } from "mongodb";
import db from "./mongodb-connection.js";
import debugLib from 'debug'
import { ApiError } from '../helpers/ApiError.js'
const debug = debugLib("api:repo");

const getByFilter = async (filter) => {
  const query = {};

  if (filter.title) {
    query.title = { $regex: new RegExp(filter.title, 'i') }
  }
  if (filter.author) {
    query.author = { $regex: new RegExp(filter.author, 'i') }
  }
  debug("Busqueda games con filtro:", query);
  const result = await db.collection('games').find(query).toArray();
  return result;
}

const getById = async (id) => {

  const result = await db.collection('games').findOne({
    _id: _validateAndGetId(id)
  })

  if (result) {
    return result;
  }

  const err = new Error("Ningún juego con este id");
  err.statusCode = 404;
  throw err;
}

const createGame = async (game, skipEquality = false) => {
  // Existe similar por nombre y autor
  const collection = db.collection('games');
  if (!skipEquality) {
    const equivalent = await _findEquivalentTitleAuthor(game.title, game.authors[0])

    if (equivalent) {
      throw new ApiError(409, "Ya hay un juego con un título y autor similares. Puedes forzar la escritura con el parametro skipEquality=true", { equivalent });
    }
  }
  await collection.insertOne(game);
  return {
    ...game
  }
}

const updateGame = async (id, game) => {

  const equivalent = db.collection('games').findOne({
    _id: _validateAndGetId(id)
  })
  if(!equivalent){
    throw new ApiError(404, "El juego buscado no existe");
  }

  const result = await db.collection('games').replaceOne(
    {_id: ObjectId.createFromHexString(id)},
    game,
    imageUrl = equivalent.imageUrl
  );
  return await getById(id);
}

const updateGameImage = async (id, imageUrl) => {

  const equivalent = db.collection('games').findOne({
    _id: _validateAndGetId(id)
  })
  if(!equivalent){
    throw new ApiError(404, "El juego buscado no existe");
  }

  const result = await db.collection('games').updateOne(
    {_id: ObjectId.createFromHexString(id)},
    {$set: {imageUrl: imageUrl}}
  );
  return await getById(id);
}

const deleteById = async (id) => {
  const result = await db.collection('games').deleteOne({
    _id: _validateAndGetId(id)
  })
  if(result.deletedCount > 0)
    return;

  throw new ApiError(404, "No se encontró un elemento para borrar con ese id", {searchId: id});
}

function _validateAndGetId(id){
  if (!ObjectId.isValid(id)) {
    throw new ApiError(400, "El formato de id no es válido");
  }
  return ObjectId.createFromHexString(id);
}

async function _findEquivalentTitleAuthor(title, author){
  const equivalent = await db.collection('games').findOne({
    title: { $regex: title, $options: 'i' },
    authors: { $elemMatch: { $regex: author, $options: 'i' } }
  });
  return equivalent;
}

export default {
  getByFilter,
  getById,
  createGame,
  updateGame,
  updateGameImage,
  deleteById
}
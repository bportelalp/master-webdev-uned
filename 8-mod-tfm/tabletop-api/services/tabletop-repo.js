import db from "./mongodb-connection";

const getAll = async () => {
  const result = await db.collection('games').find().toArray();
}

export {
  getAll
}
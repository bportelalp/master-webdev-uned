const repo = require('../../services/mflix-db-repo');
const handlers = require('../../controllers/handlers');
const usersHandler = handlers('users');

module.exports = (app, ruta) => {
  app.get(ruta, usersHandler(repo).get);
  app.get(`${ruta}/:id`, usersHandler(repo).getId);
  app.post(ruta, usersHandler(repo).post);
  app.put(`${ruta}/:id`, usersHandler(repo).put);
  app.delete(`${ruta}/:id`, usersHandler(repo).delete);
}
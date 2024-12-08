const repo = require('../../services/mflix-db-repo');
const handlers = require('../../controllers/handlers');
const moviesHandler = handlers('comments');

module.exports = (app, ruta) => {
  app.get(ruta, moviesHandler(repo).get);
  app.get(`${ruta}/:id`, moviesHandler(repo).getId);
  app.post(ruta, moviesHandler(repo).post);
  app.put(`${ruta}/:id`, moviesHandler(repo).put);
  app.delete(`${ruta}/:id`, moviesHandler(repo).delete);
}
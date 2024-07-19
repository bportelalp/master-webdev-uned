const services = require('../../services');
const handlers = require('../../controllers/handlers');
const albumsHandler = handlers('albums');

module.exports = (app, ruta) => {
  app.get(ruta, albumsHandler(services).get);
  app.get(`${ruta}/:id`, albumsHandler(services).getId);
  app.post(ruta, albumsHandler(services).post);
  app.put(`${ruta}/:id`, albumsHandler(services).put);
  app.delete(`${ruta}/:id`, albumsHandler(services).delete);
}
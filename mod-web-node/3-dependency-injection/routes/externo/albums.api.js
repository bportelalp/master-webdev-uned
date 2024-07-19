const services = require('../../services');
const handlers = require('../../controllers/handlers');
const usersHandler = handlers('albums');

module.exports = (app, ruta) => {
  app.get(ruta, usersHandler(services).get);
  app.get(`${ruta}/:id`, usersHandler(services).getId);
  app.post(ruta, usersHandler(services).post);
  app.put(`${ruta}/:id`, usersHandler(services).put);
  app.delete(`${ruta}/:id`, usersHandler(services).delete);
}
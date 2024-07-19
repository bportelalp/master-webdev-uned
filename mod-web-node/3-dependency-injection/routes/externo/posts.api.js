const services = require('../../services');
const handlers = require('../../controllers/handlers');
const postsHandler = handlers('posts');

module.exports = (app, ruta) => {
  app.get(ruta, postsHandler(services).get);
  app.get(`${ruta}/:id`, postsHandler(services).getId);
  app.post(ruta, postsHandler(services).post);
  app.put(`${ruta}/:id`, postsHandler(services).put);
  app.delete(`${ruta}/:id`, postsHandler(services).delete);
}
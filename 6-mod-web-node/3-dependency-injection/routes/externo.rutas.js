const usersRepo = require('./externo/users.api.js')
const albumsRepo = require('./externo/albums.api.js')
const postsRepo = require('./externo/posts.api');
module.exports = (app) =>{
  usersRepo(app, '/externo/users')
  albumsRepo(app, '/externo/albums')
  postsRepo(app, '/externo/posts');
};
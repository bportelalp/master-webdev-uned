const usersRepo = require('./externo/users.api.js')
const albumsRepo = require('./externo/movies.api.js')
const postsRepo = require('./externo/comments.api');
module.exports = (app) =>{
  usersRepo(app, '/externo/users')
  albumsRepo(app, '/externo/movies')
  postsRepo(app, '/externo/comments');
};
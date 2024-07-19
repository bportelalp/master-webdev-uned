const usersRepo = require('./externo/users.api.js')
const albumsRepo = require('./externo/albums.api.js')
module.exports = (app) =>{
  usersRepo(app, '/externo/users')
  albumsRepo(app, '/externo/albums')
};
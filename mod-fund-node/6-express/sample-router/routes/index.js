
const express = require('express');
const router = express.Router();                // (1)

router.get('/', function(req, res){             // (2)
  res.type('text/plain');
  res.send('¡Hola Mundo!');
});

router.get('/about', function(req, res){
  res.type('text/plain');
  res.send('Información del Mundo');
});

module.exports = router;

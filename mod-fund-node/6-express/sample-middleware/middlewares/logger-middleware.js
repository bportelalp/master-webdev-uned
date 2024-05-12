

function logRequest(request, response, next){   
  console.log('Logger propio --> Solicitud: ' + request.method + ' a ' + request.url + ' desde ' + request.socket.remoteAddress);
  next()                                   
}

module.exports = {
  logRequest
}
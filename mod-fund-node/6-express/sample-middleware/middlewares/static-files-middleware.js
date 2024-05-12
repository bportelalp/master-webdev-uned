const path = require('path');
const fs = require('fs');

function serveStaticFiles(wwwroot = __dirname) {
  // Devolviendo una funcion es un modo de inyeccion de dependencias
  return (req, res, next) => {
    const filePath = path.join(wwwroot, req.url);
    fs.stat(filePath, function (err, fileInfo) {
      if (err) {
        next();
        return;
      }
      if (fileInfo.isFile()) {
        res.sendFile(filePath);
      } else {
        next();
      }
    })
  };
}

module.exports = serveStaticFiles
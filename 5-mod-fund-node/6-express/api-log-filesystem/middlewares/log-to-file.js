
const logger = require('morgan');
const path = require('path');
const express = require('express');
const { createWriteStream } = require('fs');

let file = createWriteStream(`./static/logs/access.log`);

/**
 * Proporciona un middleware para hacer log de todas las peticiones sin errores.
 * @returns 
 */
function logToFilesystem() {
  return logger('combined', { stream: file, skip: (req, res) => res.statusCode >= 400 })
}

/**
 * Proporciona acceso a los archivos de logs
 */
function accessLogs() {
  const staticPath = path.join(__dirname, 'static');
  return express.static(staticPath, { maxage: '1d' })
}

module.exports = {
  logToFilesystem,
  accessLogs,
}
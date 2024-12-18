import debugLib from "debug";
const debug = debugLib("api:error-handler")


// Middleware para manejar errores
const errorHandler = (err, req, res, next) => {
  debug('Incercepted error:', err)
  const statusCode = err.statusCode || 500;

  let problemDetails = {
    status: statusCode,
    title: err.message,
    type: err.type || undefined,
  };

  if(err.details && Object.keys(err.details).length > 0){
    problemDetails = {
      ...problemDetails,
      ...err.details,
    }
  }

  res.status(statusCode).json(problemDetails);
};

export default errorHandler;

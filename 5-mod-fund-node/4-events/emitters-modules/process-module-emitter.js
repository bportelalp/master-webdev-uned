const myMod = module.exports = { 
  emitEvent: function() { 
    // El objeto process permite registrar eventos dentro del proceso.
      process.emit('globalEvent'); 
  } 
};
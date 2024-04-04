process.stdin.once("data", (datos) => {
  const nombre = datos.toString().trim().toUpperCase();
  if (nombre !== "") {
    process.stdout.write(`Hola ${nombre}!. Pero los datos originales son ${datos}`);
  } else {
    process.stderr.write("La entrada está vacía.");
  }
  process.stdin.pause();
});
console.log("¿Cuál es su nombre?")
process.stdin.resume();                                
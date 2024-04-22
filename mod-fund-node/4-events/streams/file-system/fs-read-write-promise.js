const fs = require("fs").promises;

const path = require("path");

const rutaFichero = path.join(process.cwd(), "hola.txt");

async function run() {
  try {
    const contenidos = await fs.readFile(rutaFichero, "utf8");

    console.log("Contenido del archivo:", contenidos);

  } catch (error) {
    console.error(error);
  }
}

run();
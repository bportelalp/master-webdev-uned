/*
STDIN tambien es una entrada stream. Se puede leer la entrada de texto como stream.
 */

process.stdin
  .once('readable', () => {
    let chunk
    console.log('New data available')
    while ((chunk = process.stdin.read()) !== null) {
      console.log(
        `Chunk read (${chunk.length} bytes): "${chunk.toString()}"`
      )
    }
  })
  .on('end', () => console.log("End of stream"));

console.log("Escribe algo a continuación, un texto medio largo. Se leerá como un stream")
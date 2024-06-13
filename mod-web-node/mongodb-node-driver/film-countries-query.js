require("dotenv").config();
const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_DB_MFLIX;  
console.log("Connecting to ", uri);
const client = new MongoClient(uri);      
async function run() {
  try {
    const db = client.db("mflix");
    const moviesCollection = db.collection("movies");

    const distinctCountries = (await moviesCollection.distinct("countries")).length
    console.log("Hay películas de", distinctCountries, "países distintos");

    const moviesbefore2000 = (await moviesCollection.countDocuments({year: {$lt: 2000}}))
    console.log("Hay", moviesbefore2000, "películas de antes de 2000");
    
    const moviesafter2000 = (await moviesCollection.countDocuments({year: {$gte: 2000}}))
    console.log("Hay", moviesafter2000, "películas de 2000 y posteriores");

  } finally {
    await client.close();                
  }
}
run().catch(console.dir);
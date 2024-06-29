
let debug = require("debug")("route:mflix");
var express = require("express");
var router = express.Router();
const client = require("../services/conexion-db");

router.get("/", (req, res, next) => {
  res.send("Welcome to MFlix!");
});


router.get("/movies", async (req, res, next) => {
  const mflix = client.db("mflix");
  const query = { title: "Traffic in Souls" };
  const movie = await mflix.collection("movies").findOne(query);
  res.send(movie);
});

module.exports = router;
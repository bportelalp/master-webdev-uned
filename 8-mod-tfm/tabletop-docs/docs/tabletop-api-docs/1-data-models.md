---
sidebar_position: 1
---

# Modelo de datos

En esta sección se definen los modelos de datos usados en la aplicación. Básicamente son dos: los juegos y los resultados de partidas.

## Games

Representa cada juego.

* `_id`: id único que se genera en MongoDb.
* `title`: título del juego
* `authors`: Colección de los nombres de los autores
* `publisher`: editorial.
* `players`: objeto que define el número de jugadores. Si es un número fijo, `min` = `max`.
* `playTime`: tiempo de juego en minutos.
* `mechanics`: coleccion de mecánicas que definen el juego.
* `description`: descripción del juego
* `imageUrl`: ruta relativa donde se encuentra la imagen. La ruta absoluta se compone *ruta backend* + *ruta relativa*.

```json
{
    "_id": "675f184f52bf0b79f7313cba",
    "title": "7 Wonders: duel",
    "authors": [
        "Antoine Bauza",
        "Bruno Cathala"
    ],
    "publisher": "Asmodée",
    "players": {
        "min": 2,
        "max": 2
    },
    "playTime": 30,
    "mechanics": [
        "Colección de sets"
    ],
    "imageUrl": "/public/games/675f184f52bf0b79f7313cba.jpg",
    "description": "Desarrolla la ciencia, mejora tu ejército, construye prestigiosos edificios ¡y conduce a tu civilización hacia la victoria! En 7 Wonders Duel cada jugador es el líder de una civilización que construirá Estructuras y erigirá Maravillas. Las Estructuras y las Maravillas construidas por cada jugador"
}
```

## GameResults

Representa cada ronda jugada a un juego

* `_id`: id único que se genera en MongoDb.
* `gameId`: id del juego al que pertenece la partida.
* `playedOn`: fecha de la partida en formato ISO.
* `results`: colección de resultados, donde cada elemento es la puntuación de un jugador.
  * `player`: nombre del jugador.
  * `resultItems`: colección de todos los marcadores que se puntúan.
    * `name`: nombre del marcador.
    * `score`: puntuación del marcador.
  * `globalResult`: puntuación total del jugador.
  * `win`: indica si es el ganador de la partida.

```json
{
    "_id": "67646e93a3a7e6272c325d35",
    "gameId": "675f184f52bf0b79f7313cba",
    "playedOn": "2024-12-20T01:00:00.000Z",
    "results": [
        {
            "player": "Bruno",
            "resultItems": [
                {
                    "name": "Puntos de influencia",
                    "score": 5
                },
                {
                    "name": "Maravillas construidas",
                    "score": 5
                }
            ],
            "globalResult": 10,
            "win": false
        },
        {
            "player": "Lucía",
            "resultItems": [
                {
                    "name": "Puntos de influencia",
                    "score": 10
                },
                {
                    "name": "Maravillas construidas",
                    "score": 5
                }
            ],
            "globalResult": 15,
            "win": true
        }
    ]
}
```
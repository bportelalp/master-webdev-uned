---
sidebar_position: 3
---
# Endpoint `api/games`

Los métodos de `api/games` permiten acceder al catálogo de juegos.

Estos métodos se definen en el archivo [/routes/games.js](https://github.com/bportelalp/master-webdev-uned/blob/main/8-mod-tfm/tabletop-api/routes/games.js). Para aquellos necesarios, se realiza la validación de los datos de entrada.

## GET `/api/games`

Devuelve la lista completa de juegos registrados

```bash
curl --location 'localhost:5000/api/games'
```

El resultado es una coleccion de juegos, por ejemplo la mostrada:

```json
[
    {
        "_id": "675ebf5c34583181ee8a900b",
        "title": "Catan",
        "authors": [
            "Klaus Teuber"
        ],
        "description": "Catán el juego",
        "publisher": "Devir",
        "players": {
            "min": 3,
            "max": 5
        },
        "playTime": 60,
        "mechanics": [
            "Gestión de recursos"
        ],
        "imageUrl": "/public/games/675ebf5c34583181ee8a900b.jpg"
    },
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
]
```

## GET `/api/games/:gameId`

Similar al anterior, pero buscando explícitamente por ID.

## POST `/api/games`

Envía un juego al servidor para registrarlo. La solicitud debe tener el siguiente formato.

```bash
curl --location 'localhost:5000/api/games' \
--header 'Content-Type: application/json' \
--data ' {
        "title": "Catan",
        "authors": [
            "Klaus Teuber"
        ],
        "description": "Catán el juego",
        "publisher": "Devir",
        "players": {
            "min": 3,
            "max": 5
        },
        "playTime": 60,
        "mechanics": [
            "Gestión de recursos"
        ]
    }'
```

## PUT `/api/games/:gameId`

Similar al anterior, para editar un juego existente, proporcionando el `gameId` en la ruta.

## DELETE `/api/games/:gameId`

Elimina el juego especificado por id en la ruta.

## PUT `/api/games/:gameId/image`

Permite subir una imagen y ligarla al juego especificado. Este método requiere de `content-type/multipart-form-data` como cuerpo del mensaje con la imagen.

```bash
curl --location --request PUT 'localhost:5000/api/games/675f184f52bf0b79f7313cba/image' \
--form 'image=@"ruta-imagen.jpg"'
```

Destacar que este método necesita del middleware [/middlewares/file-upload.js](https://github.com/bportelalp/master-webdev-uned/blob/main/8-mod-tfm/tabletop-api/middlewares/file-upload.js) para realizar la carga de la imagen.

De forma general, la imagen se guarda en la carpeta `public/uploads` de forma predefinida.

una vez se valida que la solicitud es correcta, la imagen se mueve al directorio `public/games` con nombre de archivo el id del juego, esto es `_id`.
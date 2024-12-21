---
sidebar_position: 4
---
# Endpoint `api/game-results`

Los métodos de `api/game-results` permiten acceder al catálogo de juegos.

Estos métodos se definen en el archivo [/routes/games.js](https://github.com/bportelalp/master-webdev-uned/blob/main/8-mod-tfm/tabletop-api/routes/games.js). Para aquellos necesarios, se realiza la validación de los datos de entrada.

## GET `/api/game-results/:gameId`


Devuelve la lista de resultados. Requiere de dos parámetros de ruta en formato fecha, `fromDate` y `toDate` para acotar la devolución de resultados.


```bash
curl --location 'localhost:5000/api/game-results/675f184f52bf0b79f7313cba?fromDate=2024-01-01T01%3A00%3A00Z&toDate=2025-01-01T01%3A00%3A00Z'
```

El resultado son todas las partidas jugadas para ese juego y en ese rango de fechas.

```json
[
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
    },
    {
        "_id": "6764768fa297f911b9509827",
        "gameId": "675f184f52bf0b79f7313cba",
        "playedOn": "2024-12-19T20:00:00.000Z",
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
]
```

## POST `/api/game-results`

Registra una nueva ronda para un juego. El resultado se envía en el cuerpo del mensaje. Se comprueba que el juego enviado exista antes de registrar los datos.

Ejemplo de consulta:

```bash
curl --location 'localhost:5000/api/game-results' \
--header 'Content-Type: application/json' \
--data '{
    "gameId": "675f184f52bf0b79f7313cba",
    "playedOn": "2024-12-19 21:00:00",
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
}'
```
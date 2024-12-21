# Tabletop API

REST API para catálogo de juegos

## Variables de entorno

Crear un archivo `.env` con las siguientes variables:

````.env
MONGO_DB = Cadena de conexión mongodb
FOLDER_HOSTED_WEBAPP = ruta a build de una app de react. opcionalmente no incluir esta variable
FOLDER_IMAGES_TEMP = 'public/uploads'
FOLDER_IMAGES = 'public/games'
FOLDER_IMAGES_ALLOWED_TYPES = 'jpeg|jpg|png|gif'
DEBUG = "*"
```
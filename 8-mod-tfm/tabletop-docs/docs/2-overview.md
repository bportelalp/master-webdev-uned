---
sidebar_position: 2
---

# Visión general

En esta sección se incluye una vista general de lo que es la aplicación programada, así como el acceso al repo.

## Código fuente

Puedes acceder al código fuente en este [repositorio de GitHub](https://github.com/bportelalp/master-webdev-uned/tree/main/8-mod-tfm).

## Base de datos Mongo DB

Para el almacenamiento de los datos, disponemos de un clúster de MongoDB Atlas. utilizamos una base de datos llamada `tabletop-data`.

Para más información, véase [Fuente de datos - MongoDB](./3-datasource.md)

![Colecciones en MongoDB](../static/img/mongodb/mongodb-collections.png)


## Backend con Express

El backend está formado por los siguientes componentes:

1. Servicios de datos. administran las comunicaciones directas con MongoDB.
2. Middleware de gestión de errores: Gestiona los errores devolviendo resultados como `ProblemDetails`.
3. Middleware de subida de archivos: Administra la subida y almacenamiento de las imagenes de los juegos.
4. Middleware de validación de datos: comprueba que los datos recibidos de cliente están con el esquema adecuado.
5. Rutas: las propias rutas donde definir la API.

Para más información, véase [TODO].

## Frontend con React

El frontend está elaborado con `react`, teniendo las siguientes funcionalidades:

1. Vista general de todos los juegos registrados.
2. Detalles de juego y partidas.
3. Formulario registro/edición de juego.

Para más información, véase [TODO].


![Página principal de tabletop-webapp](../static/img/frontend/main-page.png)

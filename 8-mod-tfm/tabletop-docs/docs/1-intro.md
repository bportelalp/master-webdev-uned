---
sidebar_position: 1
slug: /
---

# Introducción

Esta es la documentación del Trabajo Fin de Máster realizado por **Bruno Portela López** para el Máster de Formación permanente de la UNED:

> Diseño y desarrollo de Aplicaciones y Entornos Web (Especialidad en node.js)


## Catálogo de Juegos de Mesa

El trabajo pretende poner en práctica lo aprendido de node.js empleando principalmente `express` para construir una REST API, acompañada de un front-end con `react`.

Lo que se pretende construir en este Trabajo Fin de Máster es un prototipo de una aplicación web que sirva de catálogo personal, así como registro de las rondas aplicadas en cada partida. 

El alcance de este trabajo es un *prototipo* para explorar las posibilidades, a la vez que demostrar los conocimientos adquiridos a lo largo del Máster, así como la capacidad de integrarlos para elaborar una sencilla aplicación.

## Alcance

El alcance de este trabajo aborda los siguientes requisitos.

1. Realizar un CRUD de información básica de juegos de mesa, abordando los siguientes aspectos.
    * Realizar un modelo de datos, a almacenar en una colección de **MongoDB**.
    * Realizar los métodos `GET`, `POST`, `PUT` y `DELETE` necesarios en `express` para administrar los juegos.
    * Crear un front que permita visualizar y ejecutar estas operaciones básicas.
2. Realizar un CRUD de las diferentes partidas de juegos.
    * Realizar un modelo de datos, a almacenar en una colección de **MongoDB**.
    * Realizar los métodos `GET` y `POST` de partidas.
    * Visualizar las partidas en la ficha de cada juego.
3. Servir el front desde express.
4. Desplegar en un EC2.
5. Redactar esta misma documentación con un framework para `node.js` como es **Docusaurus**.

<b style={{color: 'red'}}>NO</b> está en el alcance de este trabajo, al ser simplemente un prototipo:

* Autenticación y autorización
* Gestión de errores en el front.
* Formularios más complejos como el de editar y crear registros de rondas.

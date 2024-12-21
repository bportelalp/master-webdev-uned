---
sidebar_position: 1
---

# Preparativos - Alojar aplicación de React en Express

Para el despliegue por simplicidad, se va a alojar la aplicación de react en express.

Para ello, hay que configurar a express para que hospede como archivos estáticos la compilación de la aplicación de react

## Configurar Express

En el `app.js` de la aplicación de express, añadimos el siguiente fragmento:

```js
// Hostear una app de react
if(process.env.FOLDER_HOSTED_WEBAPP)
  app.use('/', express.static(process.env.FOLDER_HOSTED_WEBAPP))
```

De esta manera, si en el archivo `.env` definimos esa variable, express servirá esos archivos en la ruta raíz.

## Compilar aplicación de react

En la carpeta del proyecto de react, ejecutamos el siguiente comando `npm run build`, que ejecutará el script `react-scripts build`. Esto generará en el directorio `build` la aplicación preparada para producción.

## Servir build desde Express

Ahora sólo necesitamos configurar la variable de `.env` del proyecto de express, para que apunte a la carpeta de salida de `build` de react para que sirva los archivos

```.env
FOLDER_HOSTED_WEBAPP = '..\\tabletop-webapp\\build'
```
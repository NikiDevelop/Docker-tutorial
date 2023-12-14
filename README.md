<div align="center">
    <h1>Dockerfile</h1>
</div>

**Dockerfile** es un documento de texto que contiene comandos para ensamblar una `imagen`.
Luego, **Docker** puede crear una imagen leyendo esas instrucciones.<br>
Primero creamos un archivo que se llamará `Dockerfile`


```
FROM node:19-alpine

COPY package.json /app/
COPY src /app/

WORKDIR /app

RUN npm install 

CMD [ "node", "server.js" ]
```
Básicamente este sería nuestro archivo `Dockerfile`, vamos linea por linea: 
<br>
En la primera línea del código `FROM node:19-alpine`  
<br>
Después, configura el directorio de trabajo de la aplicación.<br>
Si no se configura un `WORKDIR`, Docker creará uno de forma predeterminada, por lo que es una buena idea configurarlo.<br>
```
...
WORKDIR /app
```

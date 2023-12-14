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

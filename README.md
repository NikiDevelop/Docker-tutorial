<div align="center">
    <h1>Dockerfile</h1>
</div>

**Dockerfile** es un documento de texto que contiene comandos para ensamblar una `imagen`.
Luego, **Docker** puede crear una imagen leyendo esas instrucciones.

<br>

Primero creamos un archivo que se llamará `Dockerfile`, a la raiz de nuestro proyecto. 


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
En la primera línea del código `FROM` le damos las instrucciones para configurar la imagen de la aplicación. <br> 
Puedes usar el que quieras. ["Docker Hub image"](https://hub.docker.com/_/node/)

<br>

Agregamos `COPY package.json /app/` que copiará las dependencias del proyecto, y le pasamos también nuestra aplicación  `COPY src /app/` 

```
COPY package.json /app/
COPY src /app/
```
<br>

Después, configura el directorio de trabajo de la aplicación.<br>
Si no se configura un `WORKDIR` Docker creará uno de forma predeterminada, por lo que es una buena idea configurarlo.
<br> 

```
WORKDIR /app
```

<br>

Después de que se haya copiado nuestra aplicación se ejecutará el comando `RUN npm install` 

`CMD` Ejecuta el comando para iniciar la aplicación. <br>
Nosotros la tenemos en el puerto 3000 y la podemos verla en el `localhost:3000` <br>

```
FROM node:19-alpine

COPY package.json /app/
COPY src /app/

WORKDIR /app

RUN npm install 

CMD [ "node", "server.js" ]

```

## Creamos la imagen del Dockerfile

En la terminal ejecutamos los siguientes comandos: <br>
Construimos nuestra `imagen` de la aplicación.

```
docker build -t node-app:1.0 .
```
 <br> 
 
 Ahora es posible crear un contenedor con esta imagen. Alojada en el puerto `localhost:3000`
 ```
docker run -d -p 3000:3000 node-app:1.0
```
<br>

Comandos que podemos ejecutar para ver nuestras imagenes: `docker images`, para ver las que se están ejecutando usaremos: `docker ps`. 
<br>

Por último ejecutamos `docker logs ID` el ID es el de la imagen que hemos creado.

```
docker logs 585bcd40e851
```

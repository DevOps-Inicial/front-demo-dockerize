# Comandos necesarios para dockerizar nuestra app de angular
FROM node:18.16.0-alpine AS build
# Asignar un directorio de trabajo
WORKDIR /app
# Copie todos los archivos de configuracion de la aplicacion y posteriormente los ejecute
COPY package*.json .
# Descargar las dependencias de la aplicacion
RUN yarn
# Copiar los archivos generados al compilar la aplicacion
COPY . .
# Realiza la generacion del "ejecutable de la app javascript"
RUN yarn build
# Una vez realizado el compilado, ejecutamos en el servidor web contenerizado
FROM nginx
# Ejecucion desde el directorio de ngins la configuracion por defecto que se tiene al instalarlo
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
# Finalemnte para el despliegue de la app, una vez que se haya hecho el build
COPY --from=build /app/dist/front-demo-dockerize /usr/share/nginx/html
# Puerto por el cual saldrá internamente. Al desplegar el contenedor se usa otro puerto
EXPOSE 80

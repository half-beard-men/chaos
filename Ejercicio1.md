# Package.json
El archivo package.json es un archivo que verás en casi el 100% de proyectos de frontend. Es un gestor de librerías javascript, que permiten ser fácilmente instalables y usables por cualquiera que desee contribuir al proyecto.

# Ejercicio 1
Instala la librería `parceljs` para montar un bundle de nuestra aplicación javascript. La creación de un bundle es necesaria para organizar nuestro código lo mejor posible, ya que pronto nos encontraremos con proyectos con cientos de líneas de código.

Instalación de parceljs
```
npm install parcel-bundler
```
Una vez instalado aparecerá en la lista de dependencias del proyecto (package.json > dependencies).

A continuación ejecuta:
```
npm start
```
Este comando servirá a partir de ahora para desarrollar tu aplicación, ofreciéndote un servidor local donde probar todos los cambios "en vivo" que realices sobre tus archivos .js y .css

Abre la URL que te indica, normalmente http://localhost:1234 , y comprueba que ves el selector que cambia de color según su valor.
// 1- Importamos el módulo express y lo asignamos a la constante express
const express = require('express');

//2- Creamos una instancia de la aplicación express (o sea inicializamos la funcion express)
const app = express();

//3- Rutas con el método get --> al inhabilitar este paso automaticamente el middleware toma la peticion y envía el documento html en la 
// carpeta public del punto nro 4
/*app.get('/',(req, res)=>{
    res.send('');
}); */

//4- Configurando la carpeta public para servir archivos estáticos
// servirá por defecto el archivo html cuando no se ingrese otra ruta
app.use(express.static('public'));

//5- Agregamos algunas rutas
app.get('/saludo',(req, res)=>{
    res.sendFile(__dirname+'/public/saludo.html');
}); //saludo
app.get('/despedida',(req,res)=>{
    res.sendFile(__dirname+'/public/despedida.html');
}); //despedida
app.get('/cuento',(req, res)=>{
    res.sendFile(__dirname+'/public/cuento.html');
}); //un cuento

//5- Iniciamos el servidor Express en el puerto 3000
app.listen(3000,()=>{
    console.log('Servidor Express escuchando en el puerto 3000');
})


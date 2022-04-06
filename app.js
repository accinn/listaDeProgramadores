const express = require('express');
const app = express();
const path = require('path');
//const path = require('path')
let part = 3030;
app.use(express.static('public')); // para acceder a sus archivos sin especificar la carpeta, o sea que queda estatico (se debe agregar antes de todos los links)

app.listen(part, ()=> console.log('servidor recorrido'))

app.get('*',(req,res))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
})
app.get('/home', function(req,res){
    res.sendFile(path.resolve('./views/index.html')) ;  
})
app.get('/babbage', function(req,res){
    res.sendFile(path.resolve('./views/babbage.html')) ;  
})
app.get('/berners-lee', function(req,res){
    res.sendFile(path.resolve('./views/berners-lee.html')) ;  
})
app.get('/clarke', function(req,res){
    res.sendFile(path.resolve('./views/clarke.html')) ;  
})
app.get('/hamilton', function(req,res){
    res.sendFile(path.resolve('./views/hamilton.html')) ;  
})
app.get('/hopper', function(req,res){
    res.sendFile(path.resolve('./views/hopper.html')) ;  
})
app.get('/lovelace', function(req,res){
    res.sendFile(path.resolve('./views/lovelace.html')) ;  
})
app.get('/turing', function(req,res){
    res.sendFile(path.resolve('./views/turing.html')) ;  
})


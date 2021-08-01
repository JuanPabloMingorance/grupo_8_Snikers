const express = require('express');
const app = express();
const port = 3030;
const path = require('path');

app.use(express.static('public'));

app.get('/',(req,res) => res.sendFile(path.join(__dirname, 'views','index.html')));
app.get('/product',(req,res) => res.sendFile(path.join(__dirname, 'views','productDetail.html')));
<<<<<<< HEAD
app.get('/cart',(req,res) => res.sendFile(path.join(__dirname, 'views','cart.html')));
app.get('/login',(req,res) => res.sendFile(path.join(__dirname, 'views','login.html')));
app.get('/register',(req,res) => res.sendFile(path.join(__dirname, 'views','register.html')));
app.get('/footer',(req,res) => res.sendFile(path.join(__dirname, 'views','footer.html')));
app.get('/cartEntrega',(req,res) => res.sendFile(path.join(__dirname, 'views','cartEntrega.html')));
app.get('/cartPago',(req,res) => res.sendFile(path.join(__dirname, 'views','cartPago.html')));
app.get('/cartFinal',(req,res) => res.sendFile(path.join(__dirname, 'views','cartFinal.html')));
=======
app.get('/cart',(req,res) => res.sendFile(path.join(__dirname, 'views','productCart.html')));
app.get('/login',(req,res) => res.sendFile(path.join(__dirname, 'views','login.html')));
app.get('/register',(req,res) => res.sendFile(path.join(__dirname, 'views','register.html')));




>>>>>>> vistaProduct/Juan

app.listen(port, () => console.log('Servidor en el puerto ' + port));
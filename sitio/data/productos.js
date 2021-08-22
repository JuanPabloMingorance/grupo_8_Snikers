const { json } = require('express');
const fs = require('fs');
const path = require('path');
const productos = path.join('./data/productos.json');

module.export = {
productos : ()=>Json.parse(fs.readFileSync(productos,'utf-8')),
guardar : (data) => {

    fs.readFileSync(productos,Json.stringify(data,null,2),'utf-8');

},

};

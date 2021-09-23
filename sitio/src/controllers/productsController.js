const fs = require('fs');
const path = require('path');
const productos = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/productos.json'),'utf-8'));
const categorias = require('../data/categorias.json');
const marcas = require('../data/marcas.json');
const secciones = require('../data/secciones.json')

module.exports = {
    add: (req, res) =>{
        return res.render('productAdd',{
            productos,
            categorias,
            marcas,
            secciones
        })
    },
    store: (req,res) => {

        const {nombre, precio, descripcion, categoria,marca,seccion,stock} = req.body;

        let producto = {
            id : productos[productos.length - 1].id + 1,
            Nombre:  nombre,
            Precio : precio,
            Marca: marca,
            Descripcion : descripcion,
            Categoria : categoria,
            Stock: stock,
            Seccion: seccion 
        };

        productos.push(producto);
        fs.writeFileSync(path.join(__dirname,'..','data','productos.json'),JSON.stringify(productos,null,2),'utf-8');
            return res.redirect('/admin');

    },
        
    detail: (req,res) => {
        let producto = productos.find(producto => producto.id === +req.params.id)
        return res.render('productDetail', {
            productos,
            producto
        })
    },

    edit: (req,res) => {
        return res.render('productEdit',{
            producto: productos.find(producto => producto.id === +req.params.id),
            categorias,
            marcas,
            secciones,

        })
    },
    update: (req,res) => {
        let errors = validationResult(req);
        return res.send(errors)
    },
    destroy: (req,res) => {
        let productosModificados = productos.filter(producto => producto.id !== +req.params.id);

        fs.writeFileSync(path.join(__dirname,'..','data','productos.json'),JSON.stringify(productosModificados,null,2),'utf-8');
        return res.redirect('/admin')
    },
    
}
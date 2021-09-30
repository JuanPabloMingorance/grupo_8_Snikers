const fs = require('fs');
const path = require('path');
const productos = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/productos.json'),'utf-8'));
const categorias = require('../data/categorias.json');
const marcas = require('../data/marcas.json');
const secciones = require('../data/secciones.json')
const {validationResult} = require('express-validator');

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
        return res.send(req.file)

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
        return res.send(req.file)
        let producto = productos.find(producto => producto.id === +req.params.id)

        if(errors.isEmpty()){
            
            const {nombre,marca,descripcion,precio,stock,categoria,secciones,imagen} = req.body;

            productos.forEach(producto => {
                if(producto.id === +req.params.id){
                    producto.nombre = nombre;
                    producto.descripcion = descripcion;
                    producto.precio = +precio;
                    producto.categoria = categoria
                }
            });
    
            fs.writeFileSync(path.join(__dirname,'..','data','productos.json'),JSON.stringify(productos,null,2),'utf-8');
            return res.redirect('/')
        }else{
            return res.render('productEdit',{
                productos,
                categorias,
                producto,
                errores : errors.mapped(),
            })
        }
    },
    destroy: (req,res) => {
        let productosModificados = productos.filter(producto => producto.id !== +req.params.id);

        fs.writeFileSync(path.join(__dirname,'..','data','productos.json'),JSON.stringify(productosModificados,null,2),'utf-8');
        return res.redirect('/admin')
    },
    
}
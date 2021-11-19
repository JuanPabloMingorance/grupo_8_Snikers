const db = require('../database/models');
const { validationResult } = require('express-validator');


module.exports = {
    add: (req, res) => {

        let categorias = db.Category.findAll();
        let secciones = db.Section.findAll();
        let marcas = db.Brand.findAll();

        Promise.all([categorias, secciones, marcas])
            .then(([categorias, secciones, marcas]) => {

                return res.render('admin/productAdd', {
                    categorias,
                    marcas,
                    secciones
                })
            })
            .catch(error => console.log(error))
    },
    store: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            const { nombre, precio, descripcion, categoria, marca, seccion, stock } = req.body;

            db.Product.create(
                {
                    nombre : nombre.trim(),
                    descripcion : descripcion.trim(),
                    precio,
                    stock,
                    marca_id : marca,
                    seccion_id : seccion,
                    categoria_id : categoria
                }
            ).then( product => {
                db.Image.create({
                    file : req.file.filename,
                    product_id : product.id
                })
                .then( () =>  res.redirect('/admin'))
               
            }).catch(error => console.log(error))


        } else {
            let categorias = db.Category.findAll();
            let secciones = db.Section.findAll();
            let marcas = db.Brand.findAll();
    
            Promise.all([categorias, secciones, marcas])
                .then(([categorias, secciones, marcas]) => {
    
                    return res.render('admin/productAdd', {
                        categorias,
                        marcas,
                        secciones,
                        old : req.body,
                        errores : errors.mapped()
                    })
                })
                .catch(error => console.log(error))
        }

    },

    detail: (req, res) => {
        let producto = productos.find(producto => producto.id === +req.params.id)
        return res.render('productDetail', {
            productos,
            producto
        })
    },

    edit: (req, res) => {
        return res.render('productEdit', {
            producto: productos.find(producto => producto.id === +req.params.id),
            categorias,
            marcas,
            secciones,

        })
    },
    update: (req, res) => {
        let errors = validationResult(req);
        let producto = productos.find(producto => producto.id === +req.params.id)

        if (errors.isEmpty()) {

            const { nombre, marca, descripcion, precio, stock, categoria, seccion } = req.body;

            productos.forEach(producto => {
                if (producto.id === +req.params.id) {
                    producto.Nombre = nombre;
                    producto.Descripcion = descripcion;
                    producto.Precio = +precio;
                    producto.Categoria = categoria;
                    producto.Marca = marca;
                    producto.Stock = stock;
                    producto.Seccion = seccion;
                    producto.Imagen = req.file.filename;
                }
            });

            fs.writeFileSync(path.join(__dirname, '..', 'data', 'productos.json'), JSON.stringify(productos, null, 2), 'utf-8');
            return res.redirect('/admin')
        } else {
            return res.render('productEdit', {
                productos,
                categorias,
                producto,
                marcas,
                secciones,
                errores: errors.mapped(),
            })
        }
    },
    destroy: (req, res) => {
        let productosModificados = productos.filter(producto => producto.id !== +req.params.id);

        fs.writeFileSync(path.join(__dirname, '..', 'data', 'productos.json'), JSON.stringify(productosModificados, null, 2), 'utf-8');
        return res.redirect('/admin')
    },

}
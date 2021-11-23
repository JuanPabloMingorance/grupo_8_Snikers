const db = require('../database/models');
const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const {Op} = require('sequelize');

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
        db.Product.findByPk(req.params.id, {
            include : [{ all: true }]
        })
            .then(producto => {
                db.Product.findAll({
                    where : {
                        [Op.or] : [
                            {
                                categoria_id :  {
                                    [Op.like] : producto.categoria_id
                                }
                            },
                            {
                                marca_id : {
                                    [Op.like] : producto.marca_id
                                }
                            }
                        ]
                    },
                    include : [{ all: true }]
                })
                .then(productos => {
                    return res.render('productDetail', {
                        producto,
                        productos
                    })
            })
      
     
        }).catch(error => console.log(error))
     
    },

    edit: (req, res) => {

        let categorias = db.Category.findAll();
        let secciones = db.Section.findAll();
        let marcas = db.Brand.findAll();
        let producto = db.Product.findByPk(req.params.id,{
            include : [{all:true}]
        });

        Promise.all([categorias, secciones, marcas, producto])
            .then(([categorias, secciones, marcas, producto]) => {
               return res.render('admin/productEdit', {
                    categorias,
                    marcas,
                    secciones,
                    producto
                })
            })
            .catch(error => console.log(error))
    },
    update: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {

            const { nombre, marca, descripcion, precio, stock, categoria, seccion } = req.body;

            db.Product.update(
                {
                    nombre : nombre.trim(),
                    descripcion: descripcion.trim(),
                    precio,
                    stock,
                    marca_id : marca,
                    categoria_id : categoria,
                    seccion_id : seccion,
                },
                {
                    where : {
                        id : req.params.id
                    }
                }
            ).then( () => {
                if(req.file){
                    db.Image.update(
                        {
                            file: req.file.filename
                        },
                        {
                            where : {
                                product_id : req.params.id
                            }
                        }
                    ).then( () => res.redirect('/admin'))
                }
                return res.redirect('/admin')
            })
            .catch(error => console.log(error))

           
        } else {
            let categorias = db.Category.findAll();
            let secciones = db.Section.findAll();
            let marcas = db.Brand.findAll();
            let producto = db.Product.findByPk(req.params.id,{
                include : [{all:true}]
            });
    
            Promise.all([categorias, secciones, marcas, producto])
                .then(([categorias, secciones, marcas, producto]) => {
                   return res.render('admin/productEdit', {
                        categorias,
                        marcas,
                        secciones,
                        producto,
                        errores : errors.mapped()
                    })
                })
                .catch(error => console.log(error))
        }
    },
    destroy: (req, res) => {
        db.Image.findOne({
            where : {
                product_id : req.params.id
            }
        }).then(image => {
            if (fs.existsSync(path.join(__dirname, '../../public/images/products', image.file))) {
                fs.unlinkSync(path.join(__dirname, '../../public/images/products', image.file))
            }
            db.Image.destroy({
                where : {
                    id : req.params.id
                }
            }).then( () => {
                db.Product.destroy({
                    where : {
                        id : req.params.id
                    }
                }).then( () => res.redirect('/admin')) 
            })
        }).catch(error => console.log(error))
    },

}
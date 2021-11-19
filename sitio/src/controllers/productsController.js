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
        let productosModificados = productos.filter(producto => producto.id !== +req.params.id);

        fs.writeFileSync(path.join(__dirname, '..', 'data', 'productos.json'), JSON.stringify(productosModificados, null, 2), 'utf-8');
        return res.redirect('/admin')
    },

}
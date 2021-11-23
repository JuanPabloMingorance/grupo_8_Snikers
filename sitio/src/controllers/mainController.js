const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../database/models')
const {Op} = require('sequelize');

module.exports = {
  index: (req, res) => {
    let ofertas = db.Product.findAll({
      where: {
        seccion_id: 1
      },
      include: [{ all: true }],
      limit: 4
    })
    let destacados = db.Product.findAll({
      where: {
        seccion_id: 2
      },
      include: [{ all: true }],
      limit: 4
    })
    let productos = db.Product.findAll({
      include: [{ all: true }]
    })
    Promise.all([ofertas, destacados, productos])
      .then(([ofertas, destacados, productos]) => {
        let adidas = productos.filter(producto => producto.marca.nombre == "Adidas");
        let nike = productos.filter(producto => producto.marca.nombre == "Nike");
        let yezzy = productos.filter(producto => producto.marca.nombre == "Yezzy");
        let jordan = productos.filter(producto => producto.marca.nombre == "Jordan");
        return res.render("index", {
          title: "Snikers",
          ofertas,
          destacados,
          productos,
          adidas,
          nike,
          yezzy,
          jordan,
          toThousand
        });
      })
      .catch(error => console.log(error))
  },

  search: (req, res) => {
    db.Product.findAll({
      where: {
        [Op.or]: [
          {
            nombre: {
              [Op.substring]: req.query.keywords
            }
          },
          {
            descripcion: {
              [Op.substring]: req.query.keywords
            }
          }
        ]
      },
      include: [{ all: true }],
    })
      .then(productos => {
        return res.render('search', {
          productos,
          keywords: req.query.keywords,
          toThousand,
        })
      })
      .catch(error => console.error(error))
  },

  admin: (req, res) => {

    db.Product.findAll({
      include: [{ all: true }]
    })
      .then(productos => {
        return res.render('admin/admin', {
          title: "Administrador",
          productos,
        })
      })
      .catch(error => console.log(error))
  },

  cart: (req, res) => {
    return res.render("cart")

  
  },

  cartEntrega: (req, res) => {
    return res.render("cartEntrega");
  },

  cartPago: (req, res) => {
    return res.render("cartPago");
  },

  cartFinal: (req, res) => {
    return res.render("cartFinal");
  }
};

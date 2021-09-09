const fs = require("fs");
const path = require("path");
let productos = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../data/productos.json"), "utf-8")
);

module.exports = {
  index: (req, res) => {
    let ofertas = productos.filter(producto => producto.Seccion === 'oferta');
    let destacados = productos.filter(producto => producto.Seccion === 'destacado');

  return res.render("index", {
      title: "Snikers",
      ofertas,
      destacados,
    });
  },

  search: (req, res) => {
    if (req.query.busqueda) {
      let resultado = productos.filter((producto) =>
        producto.Nombre.toLowerCase().includes(req.query.busqueda.toLowerCase())
      );
      return res.render("index", {
        title: "Resultado de Búsqueda",
        productos: resultado,
        busqueda: req.query.busqueda,
      })
    }  
      return res.redirect('/')
    
  },

   admin : (req,res) => {
        return res.render('admin/admin',{
            title: "Administrador",
            productos :  JSON.parse(fs.readFileSync(path.join(__dirname, "../data/productos.json"), "utf-8"))
        })
    },

   cart: (req, res) => {
      return res.render("cart", {
        productos
      });
  },

   cartEntrega: (req, res) => {
    return res.render("cartEntrega", {
      productos
    });
  },

   cartPago: (req, res) => {
      return res.render("cartPago", {
        productos
      });
    },

   cartFinal: (req, res) => {
        return res.render("cartFinal", {
          productos
        });
      }
};

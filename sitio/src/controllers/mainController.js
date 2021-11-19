const toThousand =  n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../database/models')

module.exports = {
  index: (req, res) => {
    let ofertas = db.Product.findAll({
      where : {
        seccion_id : 1
      },
      include : [{all: true}]
    })
    let destacados = db.Product.findAll({
      where : {
        seccion_id : 2
      },
      include : [{all: true}]
    })
    Promise.all([ofertas,destacados])
      .then(([ofertas, destacados]) => {
        return res.render("index", {
          title: "Snikers",
          ofertas,
          destacados,
          toThousand
        });
      })
      .catch(error => console.log(error))
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

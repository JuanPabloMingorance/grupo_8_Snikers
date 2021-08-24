const fs = require('fs');
 const path = require('path')
const productos = JSON.parse(fs.readFileSync(paht.join(__dirname,'..','data','productos.json')));
 module.exports = {
     index : (req,res) => { 
         return res.render('index')
     }
 }
 search : (req,res) => {
    return res.render('producList',{
        marcas : marcas.filter( )
    })
}


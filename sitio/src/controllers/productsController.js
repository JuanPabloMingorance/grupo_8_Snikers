const fs = require('fs');
const path = require('path');
const productos = JSON.parse(fs.readFileSync(path.join(__dirname,'../data/productos.json'),'utf-8'));

module.exports = {
    add: (req, res) =>{
        return res.render('productAdd',{
            productos
        })
    },
    store: (req,res) => {
        
    },
        
    detail: (req,res) => {
        
    },

    edit: (req,res) => {
        
    },
    update: (req,res) => {
        
    },
    destroy: (req,res) => {
        
    },
    
}
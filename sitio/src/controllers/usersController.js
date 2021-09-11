const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs')
let productos = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../data/productos.json"), "utf-8")
  );
  let usuarios = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../data/usuarios.json"), "utf-8")
  );

module.exports = {
    register: (req,res) =>{
        return res.render('register',{
            title: "Registro",
            productos,
        })
    },

    processRegister: (req,res) =>{
        const {nombre,apellido,correo,password} = req.body;
        let usuario = {
            id : usuarios[usuarios.length-1] ? usuarios[usuarios.length-1].id + 1 : 1,
            nombre : nombre.trim(),
            apellido : apellido.trim(),
            correo : correo.trim(),
            password : bcryptjs.hashSync(password,10),
        }
        usuarios.push(usuario);
        fs.writeFileSync(path.join(__dirname, "../data/usuarios.json"),JSON.stringify(usuarios,null,2), "utf-8");
        return res.redirect('/users/login');
    },
    
    login: (req,res) => {
        return res.render('login',{
            title: "Login",
            productos
        });
    },

    processLogin: (req,res) => {
        const{correo,password}=req.body;
        let usuario = usuario.find(usuario=> usuario.correo === correo)
    },
    profile: (req,res) => {
        return res.render('profile',{
            title : 'perfil de usuarios',
            productos
        })
    }

};
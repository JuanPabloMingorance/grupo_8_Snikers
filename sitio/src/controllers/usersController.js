module.exports = {
    register: (req,res) =>{
        return res.render('register',{
            title: "Registro"
        });
    },
    
    login: (req,res) => {
        return res.render('login',{
            title: "Login"
        });
    }

};
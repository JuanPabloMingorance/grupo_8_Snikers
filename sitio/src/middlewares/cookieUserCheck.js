module.exports = (req,res,next) => {
    if(req.cookies.userRemember){
        req.session.userLogin = req.cookies.userRemember
    }
    next()
}
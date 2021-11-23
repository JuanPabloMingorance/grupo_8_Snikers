console.log('register.js success');
const $ = id => document.getElementById(id);

let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/; 

$('nombre').addEventListener('blur', function(){
    switch (true) {
        case  !this.value :
            $('error-nombre').innerHTML = "El nombre es requerido";
            this.classList.add('is-invalid')
            this.classList.remove('is-valid')
            break;
        default:
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('error-nombre').innerHTML = null;
            break;
    }
})

$('apellido').addEventListener('blur', function(){
    switch (true) {
        case  !this.value :
            $('error-apellido').innerHTML = "El apellido es requerido";
            this.classList.add('is-invalid')
            this.classList.remove('is-valid')
            break;
        default:
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('error-apellido').innerHTML = null;
            break;
    }
})

$('correo').addEventListener('blur', function(){
    switch (true) {
        case  !this.value :
            $('error-correo').innerHTML = "El email es requerido";
            this.classList.add('is-invalid')
            this.classList.remove('is-valid')
            break;
        case !regExEmail.test(this.value) :
            $('error-correo').innerHTML = "Debe ser un email válido";
            this.classList.add('is-invalid')
            this.classList.remove('is-valid')
            break
        default:
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('error-correo').innerHTML = null;
            break;
    }
})

$('password').addEventListener('blur', function(){
    switch (true) {
        case  !this.value.trim() :
            $('error-password').innerHTML = "El password es requerido";
            this.classList.add('is-invalid')
            this.classList.remove('is-valid')
            break;
        case !regExPass.test(this.value) :
            $('error-password').innerHTML = "Debe contener una mayúscula, un número y entre 6 y 12 caracteres";
            this.classList.add('is-invalid')
            this.classList.remove('is-valid')
            break
        default:
            this.classList.remove('is-invalid')
            this.classList.add('is-valid')
            $('error-password').innerHTML = null;
            break;
    }
})

$('password2').addEventListener('blur', function(){
    if(this.value !== $('password').value){
            $('error-password2').innerHTML = "Las contraseñas no coinciden";
            this.classList.add('is-invalid')
            this.classList.remove('is-valid')
    }else if(!$('password').value) {
        this.classList.remove('is-invalid')
        $('error-password2').innerHTML = null;
    }else{
        this.classList.add('is-valid')
        this.classList.remove('is-invalid')
        $('error-password2').innerHTML = null;
    }
            
})

$('terminos').addEventListener('click', () => {

    $('error-terminos').innerHTML = null

})

$('form-register').addEventListener('submit', event => {
    event.preventDefault();

    let elementsForm = $('form-register').elements;
    let error = false;

    for (let i = 0; i < elementsForm.length - 2; i++) {
        
        if(!elementsForm[i].value){
            elementsForm[i].classList.add('is-invalid')
            $('error-empty').innerHTML = "Los campos señalados son obligatorios";
            error = true
        }
    }

    if(!$('terminos').checked) {
        
        $('terminos').classList.add('is-invalid')
        $('error-terminos').innerText = "Debes aceptar los términos y condiciones";
        error = true
    }

    for (let i = 0; i < elementsForm.length - 2; i++) {
        
        if(elementsForm[i].classList.contains('is-invalid')){
            error = true
        }
    }

    if(!error){
        $('form-register').submit()
    }
})

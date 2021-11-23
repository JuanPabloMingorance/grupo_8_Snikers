console.log('profile.js success');
const $ = id => document.getElementById(id)

$('btn-password').addEventListener('click', ()=> {
    $('box-password').style.display = 'flex'
})

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

$('password').addEventListener('blur', function(){
    switch (true) {
       
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

$('form-profile').addEventListener('submit', event => {
    event.preventDefault();

    let elementsForm = $('form-profile').elements;
    let error = false;

    for (let i = 0; i < elementsForm.length - 1; i++) {
        
        if(!elementsForm[i].value && elementsForm[i].name !== "password" && elementsForm[i].name !== "password2"){
            elementsForm[i].classList.add('is-invalid')
            $('error-empty').innerHTML = "Los campos señalados son obligatorios";
            error = true
        }
    }

    for (let i = 0; i < elementsForm.length - 2; i++) {
        
        if(elementsForm[i].classList.contains('is-invalid')){
            error = true
        }
    }

    if(!error){
        $('form-profile').submit()
    }
})

/*
  Validacion de formulario
  Para Registro de usuario
*/


function iniciar(){
  psw1 = document.getElementById('password1')
  psw2 = document.getElementById('password2')
  psw1.addEventListener('input', validar, false)
  psw2.addEventListener('input', validar, false)
}

function validar(){
  if(psw1.value !== psw2.value)
  {

    psw2.setCustomValidity('El passwrod no coincide')

  }
  else if(psw1.value.length < 5 || psw2.value.length < 5)
  {
    psw2.setCustomValidity('El passwrod debe contener mínimo 5 caracteres')
  }
  else
  {
    psw2.setCustomValidity('')
  }
}

window.addEventListener('load', iniciar, false)

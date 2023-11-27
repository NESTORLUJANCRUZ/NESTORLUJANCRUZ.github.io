document.querySelector('#btnIngresar').addEventListener('click', iniciarSecion);

function iniciarSecion(){
    var sCorreo = '';
    var sContrasena = '';
    var bAcceso = false;

    sCorreo = document.querySelector('#txtCorreo').value;
    sContrasena = document.querySelector('#txtContrasenna').value;

    bAcceso = validarCredenciales(sCorreo,sContrasena);
    
    if(bAcceso == true){
        ingresar ();
    }
}
function ingresar(){
    var rol = sessionStorage.getItem('rolUsuarioActivo');
    switch(rol){
        case '1':
            window.location.href='quirquiña.html';
        break;
        case '2':
            window.location.href='alejandro.html';
        break;
    }
}
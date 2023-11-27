function obtenerListaUsuarios(){
    var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLs'));

    if(listaUsuarios == null){
        listaUsuarios =[
            ['1','Nestor','Lujan','nestorlujan@gmail.com','nestor123','2000-08-16','1'],
            ['2','Miguel','Cruz','miguelcruz@gmail.com','miguel123','2000-08-17','2']
        ]
    }
    return listaUsuarios;
}
function validarCredenciales(pCorreo , pContrasenna){
    var listaUsuarios = obtenerListaUsuarios();
    var bAcceso = false;

    for(var i = 0; i < listaUsuarios.length; i++){
        if(pCorreo == listaUsuarios[i][3] && pContrasenna == listaUsuarios[i][4]){
            bAcceso = true;
            sessionStorage.setItem('usuarioActivo', listaUsuarios[i][1]+''+listaUsuarios[i][2]);
            sessionStorage.setItem('rolUsuarioActivo', listaUsuarios[i][6]);
        }
    }
    return bAcceso;
}
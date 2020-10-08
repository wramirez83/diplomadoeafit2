function init()
{
    var nameUser = prompt('Ingrese Su Nombre');
    if(nameUser == "" || nameUser == null){
        nameUser = 'Invitado'
    }
    document.getElementById('nameUser').innerHTML = 'Bienvenido: ' +nameUser
}
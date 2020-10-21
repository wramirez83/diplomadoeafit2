var rotate = false;
var runner;
var degrees = 0;
view = true;
  function esVisible(elem){
    /* Ventana de Visualización*/
    var posTopView = $(window).scrollTop();
    var posButView = posTopView + $(window).height();
    /* Elemento a validar*/
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    /* Comparamos los dos valores tanto del elemento como de la ventana*/
    return ((elemBottom < posButView && elemBottom > posTopView) || (elemTop >posTopView && elemTop< posButView));
}
function init()
{
    var nameUser = prompt('Ingrese Su Nombre');
    if(nameUser == "" || nameUser == null ){
        nameUser = 'Invitado'
    }
    document.getElementById('nameUser').textContent = 'Bienvenido: ' +nameUser
    document.getElementById('nameUser').style = "background-color: #ffd57e;";
    
    
}
window.onscroll = function() {
    var yPhoto = document.getElementById('photo').getBoundingClientRect();
    //console.log("Vertical: " + window.scrollY);
    //console.log("Horizontal: " + window.scrollX);
    if(window.scrollY >= yPhoto.top && window.scrollY <= yPhoto.top+500 && view === true){
        rotate = true;
        animar();
    }
    else{
        rotate = false;
        clearInterval(runner);
    }
  
  };
  
function animar()
{
    var ph = document.getElementById('divPhoto')
    runner = setInterval(function(){
        degrees++;
        ph.style.webkitTransform = 'rotate(' + degrees + 'deg)';
    },50)
}
function imgs()
{
    view = false;
    console.log(view)
    rotate = false;
    clearInterval(runner);
}

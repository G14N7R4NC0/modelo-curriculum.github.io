/*let foto = document.getElementById("foto");*/
let icono_menu = document.getElementById("icono-menu");
let icono_cancel = document.getElementById("icono-cancel");


icono_menu.addEventListener("click" ,() =>{
    document.getElementById("foto").style.transition="all 400ms ease";
    document.getElementById("foto").style.opacity="0";
    document.getElementById("foto").style.visibility="hidden";
});

icono_cancel.addEventListener("click" ,() =>{
    document.getElementById("foto").style.transition="all 400ms ease";
    document.getElementById("foto").style.opacity="1";
    document.getElementById("foto").style.visibility="visible";
});


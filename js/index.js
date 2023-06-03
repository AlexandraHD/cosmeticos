//Funcionalidad menu desplegable
const selectElement = function(element) {
    return document.querySelector(element);     //selecciona los elementos
}


let menuToggle = selectElement('.menu-toggle');     //Selecciona el menu
let x = selectElement('.fa-times');
let bars = selectElement('.fa-bars');
let navList = selectElement('.nav-list');


menuToggle.addEventListener('click', function(){        //Abre el menu
    navList.classList.toggle('open');
    x.classList.toggle('open');
    bars.classList.toggle('open')
})

let nosotros = selectElement('.nosotros-btn');

nosotros.addEventListener('click', function(){
    console.log('blablabla')
    navList.classList.toggle('open');
    
})

let menuToggle2 = selectElement('.menu-toggle2');     //Selecciona el menu
let navList2 = selectElement('.nav-list2')
menuToggle2.addEventListener('click', function(){  
    x.classList.toggle('open');
    bars.classList.toggle('open')      //Abre el menu
    navList2.classList.toggle('open');
})
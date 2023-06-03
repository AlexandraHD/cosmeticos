//Funcionalidad menu desplegable
const selectElement = function(element) {
    return document.querySelector(element);     //selecciona los elementos
}


let menuToggle = selectElement('.menu-toggle');     //Selecciona el menu
let equixxxxx = selectElement('.fa-times');
let barssss = selectElement('.fa-bars');
let navList = selectElement('.nav-list');


menuToggle.addEventListener('click', function(){        //Abre el menu
    navList.classList.toggle('open');
    equixxxxx.classList.toggle('open');
    barssss.classList.toggle('open')
})

let nosotros = selectElement('.nosotros-btn');

nosotros.addEventListener('click', function(){
    console.log('blablabla')
    navList.classList.toggle('open');
    
})

let menuToggle2 = selectElement('.menu-toggle2');     //Selecciona el menu
let navList2 = selectElement('.nav-list2')
menuToggle2.addEventListener('click', function(){  
    equixxxxx.classList.toggle('open');
    barssss.classList.toggle('open')      //Abre el menu
    navList2.classList.toggle('open');
})
import LOL from './data/lol/lol.js'
console.log(LOL.data);

//Funcion para mostrar pagina ver todos
document.getElementById("showAllBtn").addEventListener('click', function() {

    document.getElementById("learnMorePage").style.display = 'none';
    document.getElementById("main").style.display = 'block';
    document.getElementById("grid").innerHTML = ""
    for (let campeon of LOL.data) {
        const template = document.createElement('div');
        template.classList.add('campeon');
        template.innerHTML = '<br>' + '<img id="imagen" class="imagen" src="' + campeon.splash + '"><h3>' + campeon.name +
            '</h3>' + '<h4>' + campeon.title + '</h4>';


        document.getElementById('grid').appendChild(template);



    };
});

//Funcion para mostrar pagina Learn More
document.getElementById("learnMoreBtn").addEventListener('click', function() {

    document.getElementById("learnMorePage").style.display = 'block';
    document.getElementById("main").style.display = 'none';
});


//Funcion inicial/funcion show all

for (let campeon of LOL.data) {
    const template = document.createElement('div');
    template.classList.add('campeon');
    template.innerHTML = '<br>' + '<img id="imagen" class="imagen" src="' + campeon.splash + '"><h3>' + campeon.name +
        '</h3>' + '<h4>' + campeon.title + '</h4>';


    document.getElementById('grid').appendChild(template);



};



// document.querySelectorAll('.imagen').forEach(div => {
//     div.addEventListener('click', function() {
//         let campeon = LOL.data[0];
//         console.log(campeon.name);
//     });
// });

// //ahi, en ese cero[0], debe ir un e.target que regrese el valor del personaje que se está clickeando, pero... como obtener el valor de algo que no lo tiene?



//E.TARGET CLASSES
import { filterByClass } from './data.js'


let classes = [];

let theParent = document.querySelector("#listaLineas")
theParent.addEventListener("click", (e) => {
    classes = filterByClass(e.target.id)

    document.getElementById("grid").innerHTML = ""
    document.getElementById("learnMorePage").style.display = 'none';
    document.getElementById("main").style.display = 'block';

    for (let campeon of classes) {
        const template = document.createElement('div');
        template.classList.add('campeon');
        template.innerHTML = '<br>' + '<img id="imagen" class="imagen" src="' + campeon.splash + '"><h3>' + campeon.name +
            '</h3>' + '<h4>' + campeon.title + '</h4>';


        document.getElementById('grid').appendChild(template);



    };

}, false);

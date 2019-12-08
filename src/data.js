import LoL from './data/lol/lol.js'



//FILTER CLASSES
const filterByClass = (claseSeleccionada) => {
    let classes = LoL.data.filter((e) => e.tags.includes(claseSeleccionada));
    return classes
};


export { filterByClass };


//comentario de prueba
import LoL from './data/lol/lol.js'



//FILTER CLASSES
const filterByClass = (claseSeleccionada) => {
    let classes = LoL.data.filter((e) => e.tags.includes(claseSeleccionada));
    return classes
};


export { filterByClass };



// const linea = LoL.data.filter(line =>
//     line.tags.includes('Mage' || 'Assassin'));

// console.log(linea);



const champeons = LoL.data.filter((type) => type.tags == "Mage" || "Assassin");
console.log(champeons)
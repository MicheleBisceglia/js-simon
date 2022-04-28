/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/


    //stampare i 5 numeri nell'html
const generateArray = generateRndNumbers (5 ,100);
document.querySelector(".numbers").innerHTML = generateArray; 
    console.log(generateArray);

function generateRndNumbers(min,max) {
    //Crea un array
    const numbersArray = [];
    //creare 5 numeri casuali
    while (numbersArray.length < 5) {
        const number = rndNumber (1, min,max)
    //inserire i 5 numeri nell'array
        if ( !numbersArray.includes(number)) {
            numbersArray.push(number);
        }
    }
    return numbersArray 
    
    //Functions - creare numeri casuali
    function rndNumber(min,max) {
        return Math.floor(Math.random() * (max - min +1) ) + min;    
    }    
}

setTimeout(function() {
    document.querySelector(".numbers").innerHTML = "";
}, 3000)


//chiedere all'utente di inserire uno alla volta 5 numeri presenti nell'array(5 promt)

//controllare se questi 5 numeri sono presenti nell'arrey

//stampare nella pagina i numeri scritti dall'utente presenti anche nell'array e il punteggio(numero di numeri che corrispondono)
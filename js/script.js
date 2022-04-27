/*Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.*/

function generateRndNumbers(maxLimit) {
    //Crea un array
    const numbersArray = [];
    //creare 5 numeri casuali
    while (numbersArray.length < 5) {
        const number = rndNumber (1, maxLimit)
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
    //stampare i 5 numeri nell'html
const generateArray = generateRndNumbers (5 ,100);
document.querySelector(".numbers").innerHTML = generateArray; 
    console.log(generateArray);

    


//Inserire nell'array 5 numeri casuali

//Stampare i 5 numeri nella pagina per 30 secondi

//chiedere all'utente di inserire uno alla volta 5 numeri presenti nell'array(5 promt)

//controllare se questi 5 numeri sono presenti nell'arrey

//stampare nella pagina i numeri scritti dall'utente presenti anche nell'array e il punteggio(numero di numeri che corrispondono)
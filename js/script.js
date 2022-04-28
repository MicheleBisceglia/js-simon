/*
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/


//creare 5 numeri casuali
const rndNumbers = generateRndNumbers (5);
console.log(rndNumbers);
//Visualizzare i numeri nella pagina
const computerNumbers = document.querySelector(".numbers");;
computerNumbers.innerHTML = rndNumbers ;
//Cancellare i numeri dalla pagina dopo 30 secondi
setTimeout(function() {
    computerNumbers.innerHTML = "";
}, 30000);

//Chiedere all'utente di scrivere i 5 numeri visualizzati in precedenza(con 5 prompt)
setTimeout(function() {
    //salvare i 5 numeri scritti dall'utente in un array
    const userArray = getUserNumbers(5);
    console.log(userArray);

    //confrontare i numeri dell'utente con i numeri casuali generati inizialmente
    const userNumbers = checkNumber(rndNumbers, userArray);
    console.log(userNumbers);

    //visualizzare il risultato
    finalResult(userNumbers);

}, (30000 + 1000));

//Functions

//generare i 5 numeri randoom iniziali
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
        return Math.floor(Math.random() * (99 - min +1) ) + min;    
    }    
}

//Genero 5 promt per chiedere all'utente i numeri 
function getUserNumbers (numbersQuantity) {
    const userNumberArray = [];
    for (let i = 0; i < numbersQuantity; i++) {
        const userNumber = parseInt(prompt("Scrivi uno dei numeri che hai visto in precedenza"));
        userNumberArray.push(userNumber);   
    }
    return userNumberArray;
} 

//controllo i numeri dei due arrey e li pusho nell' array dei risultati
function checkNumber(originalArray, arrayToCheck) {
    const resultArray = [];
    for (let i = 0; i < originalArray.length; i++) {
        const currentElement = originalArray[i];
        if (arrayToCheck.includes(currentElement)) {
            resultArray.push(currentElement);
        }
    }
    return resultArray;
}

//Stampo il risultato finale nella pagina
function finalResult(finalNumbersArray) {
    // nell'elmento DOM preimpostato inserisco il mesasggio del punteggio e i numeri
    let message = `Hai indovinato ${finalNumbersArray.length} numer`;

    if(finalNumbersArray.length === 1) {
        message += "o";
    } else {
        message += "i";
    }

    message += `: ${finalNumbersArray}`;

    document.querySelector(".result").innerHTML = message;
}
// Visualizzare in pagina 5 numeri casuali. ( con un alert )
// Dopo la chiusura dell’alert parte un timer di 30 secondi.
// Alla fine dei 30 secondi l’utente dovrà inserire, uno alla volta, i numeri che ha visto precedentemente ( se li ricorda ), tramite il prompt() (servirà un ciclo…?).
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// funzione per numero random
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}


let estrazione = fiverandomNumber(5);
// funzione per generare 5 numeri random
function fiverandomNumber(numeri){
    const number = [];
    do {        
        const num = getRandomIntInclusive(1,100);
        number.push(num)
        // console.log(num)

    } while (number.length < numeri ) ;
    return number;
}
console.log(estrazione)

// creazione alert per dire all'utente quali numeri deve memotizzare
// console.log ('i numeri da memorizzare sono:' ${estrazione});



// richiesta all'utente di inserire i numeri












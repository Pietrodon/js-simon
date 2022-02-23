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
        const num = getRandomIntInclusive(1,20);
        number.push(num)
        // console.log(num)

    } while (number.length < numeri ) ;
    return number;
}
console.log(estrazione)


// creazione alert per dire all'utente quali numeri deve memotizzare
alert(`i numeri da memorizzare sono: ${estrazione}`);

// funzione timing 



// richiesta all'utente di inserire i numeri
let arrayNumber = [];
for (let i=0;i<5;i++){
    let richiesta = parseInt(prompt(`inserisci i numeri che ti ricordi`))
    arrayNumber.push(richiesta)
}
console.log(arrayNumber)

// verifica se l'utente ha inserito i numeri corretti
// dichiarazione variabili 
let controllo;
let contatore = 0;
// ciclo for per stabilire l'uguaglianza dei valori
for (let i = 0; i < arrayNumber.length; i++) {
    controllo = false;
    if(estrazione[i] === arrayNumber[i]){
        controllo = true;
        // aggiunta punteggio se il numero inserito è corretto
        contatore  = contatore +1;
        
    } else {
        // riduzione punteggio se numero inserito è sbagliato
        contatore = contatore -1;
    }
    
}
// dichiarazione punteggio finale
if(contatore>0){
    alert(`Bravo hai vinto con un punteggio di ${contatore}`)
} else{
    alert(`Mi dispiace hai perso`)
}
console.log(`il tuo punteggio è ${contatore}`)














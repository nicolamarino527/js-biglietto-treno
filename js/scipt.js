// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e 
// l’età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale 
// del viaggio, secondo queste regole:

// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// - L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
// per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.



// 1-chiediamo all utente di inserire le due variabili (età, numero di kilometri).
let age = prompt("inserisci la tua età")
let lenght = prompt("inserisci il numero di chilometri")


// 2-ora stabiliamo il prezzo del prezzo in base alla lunghezza della tratta.
let price = lenght * 0.21;

// 3-iseriamo le variabili del prezzo in base all'età:

//-se l'età è compresa tra i 19 e i 64 anni il prezzo è invariato:
let discountPrice = price;

//-se l'età é minore di 19 anni si attua uno sconto del 20%:
if (age < 19) {
    discountPrice = price - (price * 20 / 100);

//-se invece l'età é maggiore di 19 anni si attua uno sconto del 40%:
} else if (age>65) {
    discountPrice = price - (price * 40 / 100);
}

// 4-convertiamo il prezzo ad un valore avente due decimali:
let finalPrice = discountPrice.toFixed(2);

// 5-stampiamo al cliente il valore in euro del csto delò biglietto:
console.log(`Il prezzo del tuo biglietto è di: ${finalPrice} €.`);

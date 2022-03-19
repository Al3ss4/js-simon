console.log('JS OK!')


// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


//function per generare numeri random
function generateRandomNumber( min , max ) {
    const range = max - min +1;
    return Math.floor(Math.random()*range) + min;
 }


 //array vuoto nel quale verranno inseriti i numeri random 
 generatoreNumeriRandom=[];

 //condizione per il quale i numeri verranno generati fino a quando non arriveranno a 5
 while(generatoreNumeriRandom.length < 5){

    //inserisco la funzione per generare randomicamente i numeri e li inserisco nel mio array vuoto tramite il push
    generatoreNumeriRandom.push(generateRandomNumber(1,100));
}
alert('i numeri da ricordare sono: ' + generatoreNumeriRandom);


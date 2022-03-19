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
let generatoreNumeriRandom=[];
let numeriIseritiUtente=[];
let numeroUtente;
let somma= 0;
 
 //condizione per il quale i numeri verranno generati fino a quando non arriveranno a 5
 while(generatoreNumeriRandom.length < 5){

    //inserisco la funzione per generare randomicamente i numeri e li inserisco nel mio array vuoto tramite il push
    generatoreNumeriRandom.push(generateRandomNumber(1,100));
}
alert('i numeri da ricordare sono: ' + generatoreNumeriRandom);


//creo una funzione con setTimeout
setTimeout(function(){
    
    //apparirà un prompt per 5 volte che chiederà all'utente di inserire i numeri uno per volta 
    for (let i =0 ; i < 5; i++){
    numeroUtente=parseInt(prompt('Inserisci i numeri apparsi precedentemente'));
    for (let j = 0; j < generatoreNumeriRandom.length; j++){
    // se i numeri inseriti dall'utente sono uguali a quelli generati randomicamente allora verranno inseriti in un array specifico
       if(generatoreNumeriRandom[j] == numeroUtente){
        numeriIseritiUtente.push(numeroUtente);
        
        //inserisco contatore per verificare quanti numeri ha indovinato
        somma +=1;
       
        }
    }
    
 }alert('Hai indovinato esattamente ' + somma + ' numeri! I numeri indovinati sono: '+ numeriIseritiUtente)
},30000)




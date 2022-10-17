/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.  
//Ogni cella ha un numero progressivo, da 1 a 100.
//Ci saranno quindi 10 caselle per ognuna delle 10 righe.
//Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
*/

//creare un bottone in dom, costante e ascolto
//creare dentro bottone griglia 10x10 con container in dom e costante

const buttonEl = document.querySelector('button');
const containerEl = document.querySelector('.container');


buttonEl.addEventListener('click', function(){
    const cellEl = '<div class="cell"></div>';
    
    let cellsNumber = 100;

    gridGenerator(cellsNumber, cellEl, containerEl);
    function gridGenerator(cellsNumber, cellEl, containerEl){
        for (let i=0; i < cellsNumber; i++){
            containerEl.innerHTML += cellEl;
        }
    }

})


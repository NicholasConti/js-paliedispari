"use strict";
//input
const word = prompt(' Inserisci una parola');

let reverseWords = [];
//scrivo la parola al contrario nell array
for (let i = word.length - 1; i >= 0; i--){
    reverseWords.push(word[i]);
}

//funzione per verificare se le parole nello stesso indice sono uguali
function paliCheck(inputWord, wordReverse){
    let check = false
    for(let i = 0; i < inputWord.length; i++){
        if(inputWord[i] === wordReverse[i]){
            check = true;
        } else{
            check = false
        }
    }
    return check;
}

const result = paliCheck(word, reverseWords);

if (result === true){
    alert('LA PAROLA E PALINDROMA');
} else{
    alert('LA PAROLA NON E PALINDROMA');
}
"use strict";
let check = false;
let userChoice;
//input check
while (check === false){
    userChoice = prompt('Scegli tra "Pari" e "Dispari" , RICORDA  LE MAIUSCOLE!!');
    if ((userChoice === 'Pari') || (userChoice === 'Dispari')){
        check = true;
    }  
}

let numUser;
let min = 1;
let max = 5;
check = false;

//input check
while (check === false){
    numUser = Number(prompt('Scegli un numero tra 1 e 5'));
    if ((numUser >= min) && (numUser <= max) && (!isNaN(numUser))){
        check = true;
    }  
}

//PC random number
function GetRandomNumber(numMin , numMax){
    const randomNumber = Math.floor(Math.random() * (numMax - numMin +1)) + 1 ;
    return randomNumber;
}

const numPC = GetRandomNumber(min , max);
console.log(numPC);

const somma = numUser + numPC;

function evenCheck(numSomma){
    if (numSomma % 2 === 0){
        return true
    } else return false
}

console.log(evenCheck(somma));
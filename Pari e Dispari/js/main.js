"use strict";
let check = false;
let userChoice;
while (check === false){
    userChoice = prompt('Scegli tra "Pari" e "Dispari" , RICORDA  LE MAIUSCOLE!!');
    if ((userChoice === 'Pari') || (userChoice === 'Dispari')){
        check = true;
    }  
}

console.log(userChoice);

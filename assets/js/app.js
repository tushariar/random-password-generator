/**
 * Project: Password Generator
 * Author: Tahsin Ahmed Tushar
 * Date: 22 February, 2021
 * Github: https://github.com/tushariar
 */

let generatePass = document.querySelector('#generatePass');
let type = document.getElementsByName('type');
let passField = document.querySelector('#passField');
let yourPass = document.querySelector('#yourPass');
let copyBtn = document.querySelector('.bxs-copy');

const letters = [
    "a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x",
    "y", "z"
]

const numbers = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
]

const symbols = [
    "@", "#", "*", "?", "!", ";", ":", "&"
]

let generate = function (l, n, s) {
    let pass = "";
    let i = 0;
    for (i = 0; i < l; i++) {
        let passL = letters[Math.floor(Math.random() * letters.length)];
        pass += passL;

    }
    for (i = 0; i < n; i++) {
        let passN = numbers[Math.floor(Math.random() * numbers.length)];
        pass += passN;

    }
    for (i = 0; i < s; i++) {
        let passS = symbols[Math.floor(Math.random() * symbols.length)];
        pass += passS;
    }
    pass = pass.split("");

    // let test = [1,2,3,4,5];
    let ranSort = (arr) => {
        let currentIndex = arr.length;
        let tempValue, randValue;

        while (currentIndex !== 0) {
            randValue = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            tempValue = arr[currentIndex];
            arr[currentIndex] = arr[randValue];
            arr[randValue] = tempValue;
        }
        return arr;
    }
    return ranSort(pass).join("");
}

//generate ();

generatePass.addEventListener(`submit`, (e) => {
    e.preventDefault();
    let level;
    type.forEach(t=>{
        if(t.checked === true){
            level = t.value;
        }
    });
    if(level){
        passField.style = 'display:block';
        if(level === "easy"){
            let myPass = generate(4,2,0);
            yourPass.value = myPass;
            // console.log(myPass);
        }
        else if(level === "medium"){
            let myPass = generate(6,2,1);
            yourPass.value = myPass;
            // console.log(myPass);
        }
        else if(level === "difficult"){
            let myPass = generate(6,3,2);
            yourPass.value = myPass;
            // console.log(myPass);
        }
        copyBtn.addEventListener(`click`, () => {
            let myPass = yourPass;
            myPass.select();
            myPass.setSelectionRange(0,99999);
            document.execCommand('copy');
        });
    }
    else{
        alert(`Please Select your password type first!`);
    }
})
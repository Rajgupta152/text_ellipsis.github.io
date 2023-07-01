let input = document.querySelector(".input-field");
let output = document.querySelector(".output");
let lengthButton = document.querySelector(".length");
let upperCaseButton = document.querySelector(".upper-case");
let lowerCaseButton = document.querySelector(".lower-case");


console.log(upperCaseButton);
console.log(output);

// input.addEventListener("input",() =>{
//     let str = input.value;

//     // return output.innerText = str.substring(0,7);
//     return output.innerText = str.toUpperCase();

// })

//Find length of string
lengthButton.addEventListener('click',() =>{
    let str = input.value;
    let len = str.length;
    return output.innerText = len;
})

upperCaseButton.addEventListener('click', () =>{
    let str = input.value;
    let upperCase = str.toUpperCase();
    return output.innerText = upperCase;
})

lowerCaseButton.addEventListener('click', () =>{
    let str = input.value;
    let lowerCase = str.toLowerCase();
    return output.innerText = lowerCase;
})



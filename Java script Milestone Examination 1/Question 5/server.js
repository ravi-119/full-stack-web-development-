// function checkCapitalornot() {
//     const firstName = document.getElementById("user-name").value;
//     const result = document.getElementById("result");
//     result.innerText = firstName.charAt(0).toUpperCase() + firstName.slice(1);
//     console.log(result.innerText);
//     };




// let firstName = document.getElementById("user-name").value;
// let result = document.getElementById("result");
// let submitbtn = document.getElementById("submit-btn");

function checkCapitalornot() {

let firstName = document.getElementById("user-name").value;
let result = document.getElementById("result");
let submitbtn = document.getElementById("submit-btn");

result.innerText = firstName.charAt(0).toUpperCase() + firstName.slice(1);
console.log(result.innerText);
     
}

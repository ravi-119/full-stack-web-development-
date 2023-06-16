let firstpassword = document.getElementById("password");
let confirmpassword = document.getElementById("confirm-password");
let submitbtn = document.getElementById("submi-tbtn");

submitbtn.addEventListener("click", () => {
if (firstpassword.value == confirmpassword.value) {
        alert("Successfully Login");
    } else {
        alert("try again, password didn't match");
    }

});

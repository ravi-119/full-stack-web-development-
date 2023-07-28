function Validate() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const displayvalidate = document.getElementById('validate');

    if (email.includes("@gmail.com") && password.length >= 8) {
        displayvalidate.innerText = "Valid Email and password!";
        displayvalidate.style.color = "green";
    } else {
        displayvalidate.innerText = "Invalid Email and Password";
        displayvalidate.style.color = "red";
    }
};
document.getElementById("submit-btn").addEventListener("click", Validate)
let deposit  = (user, amount) => {
    user.balance += amount
}

let withdraw = (user, amount) => {
    if (user.balance >= amount) {
        user.balance -= amount
        
    } else {
        console.log("Insufficient Balance");
    }

}

let user = { nmae: "Ravi Kumar Yadav", balance: 200}
// deposit(user, 100)
withdraw(user, 100)
console.log(user);


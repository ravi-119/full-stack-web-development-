// Using Static Method to Add Two Numbers with Calculator Class

class Calculator{
    static add(num1, num2){
        return num1 + num2;
    }
}

const result = Calculator.add(5,5);

console.log(result);
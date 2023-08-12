// Implementing Person Class With Default Vlues

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getDetails(){
        return `name: ${this.name}, age: ${this.age}`;
    }
    
}

const person1 = new Person("Ravi", 20)

console.log(person1.getDetails());

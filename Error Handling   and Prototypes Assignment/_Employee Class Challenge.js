// Employee Class Challenge

class Employee {
    constructor(name, position, salary){
        this.name = name;
        this.position = position;
        this.salary = salary;

    }
    getSalary(){
        return this.salary;
    }
}

const Employee1 = new Employee("Pravin Kumar", "Software Engineer", 80000)

console.log("salary", Employee1.getSalary());


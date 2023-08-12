// Adding a Method to a Prototype

function Student(name) {
    this.name = name;
}

Student.prototype.printDetails = function() {
    console.log(`Hello, my name is ${this.name}`);
}


const student = new Student("Ravi")
student.printDetails();

// function Student(name) {
//     this.name = name;
//   }
  
//   Student.prototype.printDetails = function () {
//     console.log(`Hello, my name is ${this.name}`);
//   };
  
//   // Expected Output
  
//   const student = new Student("Mithun");
//   student.printDetails(); 
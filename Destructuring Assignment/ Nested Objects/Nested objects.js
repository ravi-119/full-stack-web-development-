function extractNameandStreet({name, address:{street} }) {
    return {name, street};    
}


const person = {
    name: "Ravi Kumar Yadav",
    age: 20,
    address: {
        street: " Word no 21 Rajendra Nagar ",
        city: " Nautanwa",
        state: "Uttar Pradesh"
    }
};

const {name, street} = extractNameandStreet(person)
console.log(name);
console.log(street);
console.log({name, street});
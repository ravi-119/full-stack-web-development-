// type conversion 

function convertTONumber(str) {

    try {
        const num = Number(str);
        if (Number.isNaN(num)) {
            throw new Error(" Invalid number");
        }
        return num;
    } catch (error) {
        return error.message;
    }
    
}

console.log(convertTONumber("123"));
console.log(convertTONumber("abc"));
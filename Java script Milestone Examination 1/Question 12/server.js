let rentalcost = (days, cartype)=>{

    switch (cartype) {
        case "midsize":
            console.log("rental cost is :" + 10000 *days);
            break;

        case "Economy":
            console.log("rental cost is :" + 4000 *days);
            break;

        case "luxury":
            console.log("rental cost is :" + 20000 *days);
            break;
    
        default:
            console.log("cartype is invalid:");
            break;
    }

};

let days = 2;
let cartype = "midsize";
rentalcost(days, cartype);

// output = 20000



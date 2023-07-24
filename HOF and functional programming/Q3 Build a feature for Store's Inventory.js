function usdToIndrupees(iteam) {
    
    const exchangeRate = 80;

    const convertPrices = Object.entries(iteam).map(([iteamNmae, priceInUsd]) => {
         const priceInRupess = priceInUsd * exchangeRate;
         return [iteamNmae, priceInRupess];
    });

    const priceInRupess = Object.fromEntries(convertPrices)
    console.log(priceInRupess);

}

const iteams = {"apple":2.99, "Banana": 4.65, "Orange": 5.66, "Grapes":7.77};
usdToIndrupees(iteams);


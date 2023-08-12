function filterByCategory(products) {
    return function (Category) {
        return products.filter(function(products){
            return products.Category === Category;
        });
    };
}

const products = [
    {name: "Hat", Category: "Accessories"},
    {name: "Sunglasses", Category: "Accessories"},
    {name: "footwear", Category: "shoes"},
    {name: "shocks", Category: "shoes" },
    {name: "tshirt", Category: "Clothing" },
    {name: "Pants", Category: "Clothing" },
];

var clothingProducts = filterByCategory(products)("Clothing");

console.log(clothingProducts); 
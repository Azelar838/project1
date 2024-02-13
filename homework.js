let products = [
    { id: 1, name: "product 1", price: 10},
    { id: 2, name: "product 2", price: 20},
    { id: 3, name: "product 3", price: 30},
    { id: 4, name: "product 4", price: 40},
];
for(let i=0; i<products.length;i++){
    let product=products[i];
    console.log("Product ID: ",product.id);
    console.log("Product Name: ",product.name);
    console.log("Product Price: ",product.price);
    console.log("------------------");
}
class products{
    // data member
        // name;
        // price;
        // category;
        // description;
        // rating;

    // constructor method
    constructor(productName, productPrice, productCategory, productDesc, productRating){
        this.name = productName;
        this.price = productPrice;
        this.category = productCategory;
        this.description = productDesc;
        this.rating = productRating;
    }
    // member fuction
    addToCart(){
        console.log("Product added."); 
    }
    removeFromCart(){
        console.log("Product removed");
    }
    displayCart(){
        console.log("Product displayed");
    }
    buyProduct(){
        console.log("Product Bought")
    }

}
let iphone = new products("Iphone 11", 49999, "Electronics & Mobile", "A Handset", 4.5);
console.log(iphone);
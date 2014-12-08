// 'use strict';

//----------------------------------------------------------------
// product class
function product(sku, name, description, price, cal, carot, vitc, folate, potassium, fiber) {
    this.sku = sku; // product code (SKU = stock keeping unit)
    this.name = name;
    this.description = description;
    this.price = price;
    this.cal = cal;
    this.nutrients = {
        'Carotenoid': carot,
        'Vitamin C': vitc,
        'Folates': folate,
        'Potassium': potassium,
        'Fiber': fiber
    };
}
// ('APL', 'Apple', 'Eat one every day to keep the doctor away!', 12, 90, 0, 2, 0, 1, 2)

function fpProduct(sku, thumb, name, format, rating, status, publisher, description, price, memberPrice) {
    this.sku = sku; // product code (SKU = stock keeping unit)
    this.thumb = thumb;
    this.name = name;
    this.format = format;
    this.rating = rating;
    this.status = status;
    this.publisher = publisher;
    this.description = description;
    this.price = price;
    this.memberPrice = memberPrice;
}
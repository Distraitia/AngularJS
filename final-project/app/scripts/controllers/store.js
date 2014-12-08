// 'use strict';

//----------------------------------------------------------------
// store (contains the products)
//
// NOTE: nutritional info from http://www.cspinet.org/images/fruitcha.jpg
// score legend:
// 0: below 5% of daily value (DV)
// 1: 5-10% DV
// 2: 10-20% DV
// 3: 20-40% DV
// 4: above 40% DV
//
function store() {
    this.products = [
        new product(
            'APL',
            'Apple',
            'Eat one every day to keep the doctor away!',
            12,
            90,
            0,
            2,
            0,
            1,
            2
        ),
        new product(
            'BAN',
            'Banana',
            'These are rich in Potassium and easy to peel.',
            4,
            120,
            0,
            2,
            1,
            2,
            2
        ),
        new product(
            'CTP',
            'Cantaloupe',
            'Delicious and refreshing.',
            3,
            50,
            4,
            4,
            1,
            2,
            0
        ),
        new product(
            'GRF',
            'Grapefruit',
            'Pink or red, always healthy and delicious.',
            11,
            50,
            4,
            4,
            1,
            1,
            1
        ),
        new product(
            'GRP',
            'Grape',
            'Wine is great, but grapes are even better.',
            8,
            100,
            0,
            3,
            0,
            1,
            1
        )
    ];
    this.dvaCaption = [
        'Negligible',
        'Low',
        'Average',
        'Good',
        'Great'
    ];
    this.dvaRange = [
        'below 5%',
        'between 5 and 10%',
        'between 10 and 20%',
        'between 20 and 40%',
        'above 40%'
    ];
    this.fpProducts = [
        new fpProduct(
            'CWG1',
            'CwG-Book1.jpg',
            'Conversations with God: Book 1',
            'Kindle',
            '*****',
            'Auto-delivered wirelessly',
            'offered by Penguin Group (USA) LLC.',
            'description',
            '$17.99',
            '$10.99'
        ),
        new fpProduct(
            'CWG2',
            'CwG-Book2.jpg',
            'Conversations with God: Book 2',
            'Kindle',
            '*****',
            'Auto-delivered wirelessly',
            'offered by Penguin Group (USA) LLC.',
            'description',
            '$17.99',
            '$9.99'
        ),
        new fpProduct(
            'CWG3',
            'CwG-Book3.jpg',
            'Conversations with God: Book 3',
            'Kindle',
            '*****',
            'Auto-delivered wirelessly',
            'offered by Penguin Group (USA) LLC.',
            'description',
            '$17.99',
            '$9.99'
        ),
        // new fpProduct('sku', 'thumb', 'name', 'format', 'rating', 'status', 'publisher', 'description', 'price', 'memberPrice'),
        new fpProduct(
            'CWG1',
            'CwG-Book1.jpg',
            'Conversations with God: Book 1',
            'Kindle',
            '*****',
            'Auto-delivered wirelessly',
            'offered by Penguin Group (USA) LLC.',
            'description',
            '$17.99',
            '$10.99'
        )
    ];
    this.fpCaption = [
        'Thumbnail',
        'Item Name',
        'Price',
        'Quantity'
    ];
    this.fpRange = [
        
    ];
}
store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}
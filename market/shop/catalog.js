const { cashbox } = require('./cashbox');

const catalog = (function () {
    const products = [
        {
            name: 'table',
            price: 150,
            size: 1000,
            category: 'furniture',
            brand: 'IKEA',
            count: 3,
            isDiscount: false,
            discount: 0
        },
        {
            name: 'chair',
            price: 25,
            size: 500,
            category: 'furniture',
            brand: 'IKEA',
            count: 2,
            isDiscount: false,
            discount: 0
        },
        {
            name: 'tv-set',
            price: 150,
            size: 800,
            category: 'electronics',
            brand: 'LG',
            count: 4,
            isDiscount: false,
            discount: 0
        },
        {
            name: 'phone',
            price: 150,
            size: 20,
            category: 'electronics',
            brand: 'philips',
            count: 2,
            isDiscount: true,
            discount: 30
        }
    ];

    return {
        getCatalog() {
            return products;
        },

        addProductToCatalog(product) {
            if (typeof product == 'object') {
                products.push(product);
            } else {

                return 'Not a product';
            }
        },

        getProductsByProperty(...options) {
            if (options.length !== 0) {
                let filteredProducts = [];

                filteredProducts = products.filter((product) => {
                    const productValues = Object.values(product);
                    return options.every(optionItem => productValues.includes(optionItem));
                });
                return filteredProducts.length !== 0 ? filteredProducts : 'Product not found';
            } else {
                return 'Product option(s) should not be empty';
            }

        },

        sellProduct(productName) {
            if (productName) {
                // we are assume that product name is unique like vendor id
                const currentProduct = this.getProductsByProperty(productName)[0];
                let currentPrice = currentProduct.price;
                let currentCount = currentProduct.count;
                //console.log(`count untill selling: ${currentCount}`);
                //console.log(`cashbox untill selling: ${cashbox.getCashbox()}`);

                if (currentCount > 0) {
                    currentProduct.count--;
                    cashbox.addToCashbox(currentPrice);
                    //console.log(`count after selling: ${currentProduct.count}`);
                    //console.log(`cashbox after selling: ${cashbox.getCashbox()}`);
                } else {
                    try {
                        this.removeProductFromCatalog(productName);
                        //console.log(`Product was removed from catalog`);
                    } catch (err) {
                        console.error('Product not exists');
                    }
                }
            } else {
                return 'Product name should not be empty';
            }

        },

        removeProductFromCatalog(productName) {
            if (productName) {
                let productIndex = products.findIndex(product => product.name === productName);
                if (productIndex !== -1) {
                    this.getCatalog().splice(productIndex, 1);
                } else {
                    return 'No such product in catalog';
                }
            } else {
                return 'Product name should not be empty';
            }

        },

        addDiscount(productName, discount) {
            const currentProduct = this.getProductsByProperty(productName)[0];
            currentProduct.isDiscount = true;
            currentProduct.discount = discount;
        }
    }
})();

module.exports = { catalog };
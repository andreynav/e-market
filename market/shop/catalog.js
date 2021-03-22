const { cashbox } = require('./cashbox')

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
            products.push(product);
        },

        getProductsByProperty(...options) {
            let filteredProducts = [];
            
            filteredProducts = products.filter((product) => {
                const productValues = Object.values(product);
                return options.every(optionItem => productValues.includes(optionItem));
            });
            return filteredProducts.length !== 0 ? filteredProducts : 'Product not found';
        },

        sellProduct(productName) {
            // we are assume that product name is unique like vendor id
            const currentProduct = this.getProductsByProperty(productName)[0];
            let currentPrice = currentProduct.price;
            let currentCount = currentProduct.count;
            console.log(`count untill selling: ${currentCount}`);
            console.log(`cashbox untill selling: ${cashbox.getCashbox()}`);

            if (currentCount > 0) {
                currentProduct.count--;
                cashbox.addToCashbox(currentPrice);
                console.log(`count after selling: ${currentProduct.count}`);
                console.log(`cashbox after selling: ${cashbox.getCashbox()}`);
            } else {
                try {
                    this.removeProductFromCatalog(productName);
                    console.log(`Product was removed from catalog`);
                } catch (err) {
                    console.error('Product not exists');
                }
            }
        },

        removeProductFromCatalog(productName) {
            let productIndex = 0;
           
            products.map((product, index) => product.name === productName ? productIndex = index : null);
            this.getCatalog().splice(productIndex, 1);
            console.log(`we have removed product with index ${productIndex} from catalog`);
        },

        addDiscount(productName, discount) {
            const currentProduct = this.getProductsByProperty(productName)[0];
            currentProduct.isDiscount = true;
            currentProduct.discount = discount;
        }
    }
})();

module.exports = { catalog };
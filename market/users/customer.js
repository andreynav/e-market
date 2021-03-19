const { catalog } = require('./../shop/index');
class Customer {
    role;

    constructor() {
        this.role = 'customer';
    }
    
    getRole() {
        return this.role;
    }

    getProduct(options) {
        return catalog.getProductByProperty(options);
    }

    buyProduct(product) {
        return catalog.sellProduct(product);
    }
}

module.exports = { Customer };
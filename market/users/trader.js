const { catalog } = require('./../shop/index');
class Trader {
    role;
    
    constructor() {
        this.role = 'trader';
    }
    
    getRole() {
        return this.role;
    }

    addProduct(product) {
        catalog.addProductToCatalog(product);
    }

    getProduct(options) {
        return catalog.getProductByProperty(options);
    }

    addDicount(productName, discount) {
        catalog.addDiscount(productName, discount); 
    }

    sellProduct(product) {
        return catalog.sellProduct(product);
    }

}

module.exports = { Trader };

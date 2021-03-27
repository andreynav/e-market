class Product {
    
    constructor() {
        this.name = null;
        this.price = null;
        this.size = null;
        this.category = null;
        this.brand = null;
        this.count = 1;
        this.isDiscount = false;
        this.discount = null;
    }
    
    addName(name) {
        this.name = name;
        return this;
    }

    addPrice(price){
        this.price = price;
        return this;
    }

    addSize(size) {
        this.size = size;
        return this;
    }

    addCategory(category) {
        this.category = category;
        return this;
    }
    
    addBrand(brand) {
        this.brand = brand;
        return this;
    }

    addCount(count) {
        this.count = count;
        return this;
    }

    addDiscount(discount) {
        this.discount = discount;
        this.isDiscount = true;
        return this;
    }

    createProduct() {
        const properties = Object.keys(this);
        const product = {};
        const mondatoryProperties = ['name', 'price', 'size', 'category', 'brand'];
        const isMondatory = (() => {
            let currentProductProperties = properties.filter(property => this[property]);
            return mondatoryProperties.every(mondatoryItem => currentProductProperties.includes(mondatoryItem));
        })();
        
        if (isMondatory) {
            properties.forEach(property => {
                if(this[property]) {
                    product[property] = this[property];
                }     	
            });
            return product;
        } else {
            return `Mandatory fields have not filled. Product hasn't created.`;
        }
    }
}

module.exports = { Product };
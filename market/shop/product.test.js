const { Product } = require('./index');

describe('Product file', () => {

    let product;
    const warn = `Mandatory fields have not filled. Product hasn't created.`;
    
    describe('CreateProduct function', () => {
        test('should create product with mondatory fields', () => {
            product = new Product()
                .addName('test')
                .addPrice(10)
                .addSize(10)
                .addCategory('toys')
                .addBrand('GAMEBOY')
                .createProduct();
    
            expect(product).toHaveProperty('name', 'test');
            expect(product).toHaveProperty('price', 10);
            expect(product).toHaveProperty('size', 10);
            expect(product).toHaveProperty('category', 'toys');
            expect(product).toHaveProperty('brand', 'GAMEBOY');
            expect(product).not.toBe(warn);
        });
    
        test('should create product with all available fields', () => {
            product = new Product()
                .addName('test')
                .addPrice(10)
                .addSize(10)
                .addCategory('toys')
                .addBrand('GAMEBOY')
                .addCount(2)
                .addDiscount(10)
                .createProduct();
    
            expect(product).toHaveProperty('name', 'test');
            expect(product).toHaveProperty('price', 10);
            expect(product).toHaveProperty('size', 10);
            expect(product).toHaveProperty('category', 'toys');
            expect(product).toHaveProperty('brand', 'GAMEBOY');
            expect(product).toHaveProperty('count', 2);
            expect(product).toHaveProperty('isDiscount', true);
            expect(product).toHaveProperty('discount', 10);
            expect(product).not.toBe(warn);
        });
    
        test('should not create product without mondatory field Name', () => {
            product = new Product()
                .addPrice(10)
                .addSize(10)
                .addCategory('toys')
                .addBrand('GAMEBOY')
                .createProduct();
    
            expect(product).toBe(warn);
        });
    
        test('should not create product without mondatory field Price', () => {
            product = new Product()
                .addName('test')
                .addSize(10)
                .addCategory('toys')
                .addBrand('GAMEBOY')
                .createProduct();
    
            expect(product).toBe(warn);
        });
    
        test('should not create product without mondatory field Size', () => {
            product = new Product()
                .addName('test')
                .addPrice(10)
                .addCategory('toys')
                .addBrand('GAMEBOY')
                .createProduct();
    
            expect(product).toBe(warn);
        });
    
        test('should not create product without mondatory field Category', () => {
            product = new Product()
                .addName('test')
                .addPrice(10)
                .addSize(10)
                .addBrand('GAMEBOY')
                .createProduct();
    
            expect(product).toBe(warn);
        });
    
        test('should not create product without mondatory field Brand', () => {
            product = new Product()
                .addName('test')
                .addPrice(10)
                .addSize(10)
                .addCategory('toys')
                .createProduct();
    
            expect(product).toBe(warn);
        });
    });
});
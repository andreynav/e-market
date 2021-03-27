const { catalog } = require('./index');
const { cashbox } = require('./index');

describe('Catalog file', () => {
    
    let product;

    beforeEach(() => {
        // initial state of original catalog includes 4 products
        product = {
            name: 'clock',
            price: 250,
            size: 500,
            category: 'furniture',
            brand: 'IKEA',
            count: 2,
            isDiscount: false,
            discount: 0
        };
        catalog.addProductToCatalog(product);
        // before each unit test initial state of catalog includes 5 products
    })

    afterEach(() => {
        // after each unit test state of catalog reset to initial state of original catalog
        if (catalog.getCatalog().length > 4) {
            catalog.getCatalog().splice(4);
        }
    });

    describe('GetCatalog function', () => {

        test('should not be null', () => {
            expect(catalog.getCatalog()).not.toBeNull();
        });

        test('shoud be array', () => {
            expect(Array.isArray(catalog.getCatalog())).toEqual(true);
        });

        test('should return length 5', () => {
            expect(catalog.getCatalog().length).toEqual(5);
        });
    });

    describe('AddProductToCatalog function', () => {
     
        test('should contain product in the catalog', () => {
            catalog.addProductToCatalog(product);
            expect(catalog.getCatalog()).toContain(product);
        });
        
        test('should return length 6 for catalog', () => {
            catalog.addProductToCatalog(product);
            expect(catalog.getCatalog().length).toEqual(6);
        });

        test('should return warning if typeof product not object', () => {
            //radio instanceof Product - cannot get class of product from module
            expect(catalog.addProductToCatalog('string')).toBe('Not a product');
            expect(catalog.addProductToCatalog(10)).toBe('Not a product');
            expect(catalog.addProductToCatalog(true)).toBe('Not a product');
            expect(catalog.addProductToCatalog(undefined)).toBe('Not a product');
        });

        test('should return warning if call without product', () => {
            expect(catalog.addProductToCatalog()).toBe('Not a product');
        });
    });

    describe('GetProductsByProperty function', () => {
        
        test('should find products by multiple options', () => {
            let products = catalog.getProductsByProperty('electronics', 150);
            expect(products.length).toBe(2);
        });

        test('should find products by single option', () => {
            let products = catalog.getProductsByProperty('clock');
            expect(products.length).toBe(1);
        });

        test('should not find products by not existing option', () => {
            let products = catalog.getProductsByProperty('electronics', 500);
            expect(products).toBe('Product not found');
        });

        test('should not find products by empty value', () => {
            let products = catalog.getProductsByProperty();
            expect(products).toBe('Product option(s) should not be empty');
        });
    });

    describe('SellProduct function', () => {
        
        test('should decrease the count of existing product', () => {
            catalog.sellProduct('clock');
            expect(product).toHaveProperty('count', 1);
        });

        test('should call addToCashbox function if COUNT > 0', () => {
            let initialCash = cashbox.getCashbox();
            catalog.sellProduct('clock'); // count becomes 1
            let latestCashbox = cashbox.getCashbox();
            expect(latestCashbox).toBeGreaterThan(initialCash);
        });

        test('should call removeProductFromCatalog function if COUNT === 0', () => {
            expect(catalog.getCatalog()).toContain(product);
            catalog.sellProduct('clock'); // count becomes 1
            catalog.sellProduct('clock'); // count becomes 0
            expect(catalog.getCatalog().length).toEqual(5);
        });

        test('should called with not empty value', () => {
            let result = catalog.sellProduct();
            expect(result).toBe('Product name should not be empty');
        });
    });

    describe('RemoveProductFromCatalog function', () => {

        test('should remove exisitng product', () => {
            catalog.removeProductFromCatalog('clock');
            expect(catalog.getCatalog().length).toEqual(4);
        });

        test('should not remove non exisitng product', () => {
            let result = catalog.removeProductFromCatalog('bla-bla');
            expect(catalog.getCatalog().length).toEqual(5);
            expect(result).toBe('No such product in catalog');
        });
        
        test('should called with not empty value', () => {
            let result = catalog.removeProductFromCatalog();
            expect(result).toBe('Product name should not be empty');
        });
    });

});

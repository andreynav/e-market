const { catalog } = require('./catalog');

describe('Catalog file', () => {
    let initialCatalog;

    afterEach(() => {
        // return catalog to initial state after each unit test
        if (catalog.getCatalog().length > 4) {
            catalog.getCatalog().splice(4);
        }
    });

    describe('GetCatalog function', () => {

        beforeEach(() => {
            initialCatalog = catalog.getCatalog();
        });

        test('should not be null', () => {
            expect(initialCatalog).not.toBeNull();
        });

        test('shoud be array', () => {
            expect(Array.isArray(initialCatalog)).toEqual(true);
        });

        test('should return length 4', () => {
            expect(initialCatalog.length).toEqual(4);
        });
    });

    describe('AddProductToCatalog function', () => {
        const product = {
            name: 'clock',
            price: 250,
            size: 500,
            category: 'furniture',
            brand: 'IKEA',
            count: 2,
            isDiscount: false,
            discount: 0
        };

        test('should contain product in the catalog', () => {
            catalog.addProductToCatalog(product);
            expect(catalog.getCatalog()).toContain(product);
        });
        
        test('should return length 5 for catalog', () => {
            catalog.addProductToCatalog(product);
            expect(catalog.getCatalog().length).toEqual(5);
        });

        test('should return warning if typeof product not object', () => {
            //radio instanceof Product - не могу получить класс продукта из модуля
            expect(catalog.addProductToCatalog('string')).toBe('Not a product');
            expect(catalog.addProductToCatalog(10)).toBe('Not a product');
            expect(catalog.addProductToCatalog(true)).toBe('Not a product');
            expect(catalog.addProductToCatalog(undefined)).toBe('Not a product');
        });

        test('should return warning if call without product', () => {
            expect(catalog.addProductToCatalog()).toBe('Not a product');
        });
    });
});

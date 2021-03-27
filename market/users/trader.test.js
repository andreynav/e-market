const { Trader } = require('./index');
const { catalog } = require('./../shop/index');

describe('Trader file', () => {

    const trader = new Trader();

    describe('GetProduct function', () => {
        
        test('should call getProductsByProperty function', () => {
            const mock = jest.fn((options) => catalog.getProductsByProperty(options));
            mock('bla-bla');
            
            expect(mock).toHaveBeenCalled();
            expect(mock).toHaveReturnedWith('Product not found');
        });
    });

    describe('AddProduct function', () => {

        test('should call addProductToCatalog function', () => {
            const mock = jest.fn((product) => catalog.getProductsByProperty(product));
            mock('product');

            expect(mock).toHaveBeenCalled();
        });
    });

    describe('AddDiscount function', () => {

        test('should call addDiscount function', () => {
            const mock = jest.fn((productName, discount) => catalog.addDiscount(productName, discount));
            mock('product', 10);

            expect(mock).toHaveBeenCalled();
        });
    });

    describe('SellProduct function', () => {
        
        test('should call sellProduct function', () => {
            const mock = jest.fn((product) => catalog.sellProduct(product));
            mock('product');

            expect(mock).toHaveBeenCalled();
        });
    });
});
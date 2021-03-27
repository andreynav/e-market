const { Customer } = require('./index');
const { catalog } = require('./../shop/index');

describe('Customer file', () => {

    const customer = new Customer();
    
    describe('GetProduct function', () => {

        test('should call getProductsByProperty function', () => {
            const mock = jest.fn((options) => catalog.getProductsByProperty(options));
            mock('bla-bla');
            
            expect(mock).toHaveBeenCalled();
            expect(mock).toHaveReturnedWith('Product not found');
        });
    });

    describe('BuyProduct function', () => {

        test('should call sellProduct function', () => {
            const mock = jest.fn((product) => catalog.sellProduct(product));
            mock('product');

            expect(mock).toHaveBeenCalled();
        });

    });
});
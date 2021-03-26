const { cashbox } = require('./index');

describe('Cashbox file', () => {
    
    describe('GetCashbox function', () => {
        
        test('should return cashbox value', () => {
            cashbox.addToCashbox(10);
            expect(cashbox.getCashbox()).toEqual(10);
        });
    });

    describe('AddToCashbox function', () => {

        test('should called with not empty value', () => {
            expect(cashbox.addToCashbox()).toBe('Value should not be empty');
        });


        test('should working on with type number', () => {
            expect(cashbox.addToCashbox(10)).toEqual(20);
            expect(cashbox.addToCashbox('string')).toBe('Value is not a number');
            expect(cashbox.addToCashbox({obj: 10})).toBe('Value is not a number');
        });
    });
});
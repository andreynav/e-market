const { Trader, Customer } = require('./users/index');
const { catalog, Product } = require('./shop/index');


const trader = new Trader();
const customer = new Customer();

console.log(`===== GET INITIAL CATALOG WITH 4 ITEMS =====`);
console.log(catalog.getCatalog());

console.log(`===== TRADER GET PRODUCT BY EXISTING PROPERTIES 'electronics' && 150 || SHOULD BE 2 ITEMS =====`);
let electronicsAndNumbers = trader.getProduct('electronics', 150);
console.log(electronicsAndNumbers);

console.log(`===== TRADER GET PRODUCT BY EXISTING PROPERTY PRICE 150 || SHOULD BE 3 ITEMS =====`);
let price = trader.getProduct(150);
console.log(price);

console.log(`===== TRADER GET PRODUCT BY NOTEXISTING PROPERTY 'bla-bla' || SHOULD BE WARNING 'product not found' =====`);
let blabla = trader.getProduct('bla-bla');
console.log(blabla);

console.log(`===== BUILD NEW PRODUCT WITHOUT MANDATORY FIELDS =====`);
const productBuilder = new Product();
const radioWrong = productBuilder
    .addName('radio')
    .addPrice(70)
    .addCategory('electronics')
    .addBrand('IKEA')
    .createProduct();

console.log(`===== BUILD NEW PRODUCT WITH MANDATORY FIELDS =====`);
const radio = productBuilder
    .addName('radio')
    .addPrice(70)
    .addSize(30)
    .addCategory('electronics')
    .addBrand('IKEA')
    .addCount(2)
    .createProduct();
console.log(radio);

console.log(`===== TRADER ADD PRODUCT TO CATALOG =====`);
trader.addProduct(radio);
console.log(`===== GET CATALOG AFTER PRODUCT WAS ADDED || SHOULD BE 5 ITEMS =====`);
console.log(catalog.getCatalog());

console.log(`===== TRADER ADD DISCOUNT TO PRODUCT =====`);
trader.addDicount('radio', 10);

console.log(`===== GET CATALOG AFTER TRADER ADD DISCOUNT TO PRODUCT || SHOULD BE DISCOUNT 10 FOR 'radio' =====`);
console.log(catalog.getCatalog());

console.log(`===== TRADER SOLD PRODUCT 'radio' || SHOULD BE COUNT 1 FOR 'radio' =====`);
trader.sellProduct('radio');

console.log(`===== TRADER SOLD PRODUCT 'radio' || SHOULD BE COUNT 0 FOR 'radio' =====`);
trader.sellProduct('radio');

console.log(`===== TRADER SOLD PRODUCT 'radio' || SHOULD BE warning 'product was removed from catalog' =====`);
trader.sellProduct('radio');

console.log(`===== GET CATALOG AFTER PRODUCT WAS DELETED || SHOULD BE 4 ITEMS =====`);
console.log(catalog.getCatalog());

console.log(`===== BUILD NEW PRODUCT WITH MANDATORY FIELDS =====`);
const radio1 = productBuilder
    .addName('radio1')
    .addPrice(70)
    .addSize(30)
    .addCategory('electronics')
    .addBrand('IKEA')
    .addCount(2)
    .createProduct();
console.log(radio1);

console.log(`===== TRADER ADD PRODUCT TO CATALOG =====`);
trader.addProduct(radio1);
console.log(`===== GET CATALOG AFTER PRODUCT WAS ADDED || SHOULD BE 5 ITEMS =====`);
console.log(catalog.getCatalog());

console.log(`===== CUSTOMER GET PRODUCT BY EXISTING PROPERTY 'electronics' || SHOULD BE 3 ITEMS =====`);
let electronics1 = customer.getProduct('electronics');
console.log(electronics1);

console.log(`===== CUSTOMER BUY PRODUCT 'radio1' || SHOULD BE COUNT 1 FOR 'radio1' =====`);
trader.sellProduct('radio1');





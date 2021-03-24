const { catalog } = require('./catalog');

test('first', () => {
    let initialCAtalog = catalog.getCatalog();
    expect(initialCAtalog).toBeTruthy();
});
const cashbox = (function() {
    let cashboxSum = 0;

    return {
        getCashbox: function() {
            return cashboxSum;
        },
        addToCashbox: function(val) {
            return cashboxSum += val;
        }
    }
})();

module.exports = { cashbox };
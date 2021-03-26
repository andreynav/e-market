const cashbox = (function() {
    let cashboxSum = 0;

    return {
        getCashbox: function() {
            return cashboxSum;
        },

        addToCashbox: function(val) {
            if (val) {
                if (typeof val ===  'number') {
                    return cashboxSum += val;
                } else {
                    return 'Value is not a number';
                }
            } else {
                return 'Value should not be empty';
            }
            
        }
    }
})();

module.exports = { cashbox };
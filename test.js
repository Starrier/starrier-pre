var assert = require('assert');

var calc = require('./test/calc.js');

describe('Calculator Tests', function() {
    describe('Addition Tests', function() {
        it('returns 1 + 1 = 2', function(done) {
            assert.equal(calc.add(1, 1), 2);
            done();
        });

        it('returns 1 + -1 = 0', function(done) {
            assert.equal(calc.add(1, -1), 0);
            done();
        });
    });

    describe('Multiplication Tests', function() {
        it('returns 2 * 2 = 4', function(done) {
            assert.equal(calc.mul(2, 2), 4);
            done();
        });

        it('returns 0 * 4 = 4', function(done) {
            assert.equal(calc.mul(2, 2), 4);
            done();
        });
    });
});
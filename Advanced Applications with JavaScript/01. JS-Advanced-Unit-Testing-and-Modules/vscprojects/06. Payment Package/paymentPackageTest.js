let PaymentPackage = require('./PaymentPackage');
let assert = require('chai').assert;

describe('PaymentPackage', () => {

    describe('test name', () => {

        it('with invalid arguments', () => {
            let actualResult = () => new PaymentPackage(5, 7);
            let expectedResult = 'Name must be a non-empty string';

            assert.throw(actualResult, expectedResult);
        });

        it('with length equal to 0', () => {
            let actualResult = () => new PaymentPackage('', 7);
            let expectedResult = 'Name must be a non-empty string';

            assert.throw(actualResult, expectedResult);
        });

        it('with valid arguments', () => {
            let actualResult = new PaymentPackage('test', 2);
            let expectedResult = 'test';

            assert.equal(actualResult.name, expectedResult);
        });

    });

    describe('test value', () => {

        it('with invalid arguments', () => {
            let actualResult = () => new PaymentPackage('asd', 'asdf');
            let expectedResult = 'Value must be a non-negative number';

            assert.throw(actualResult, expectedResult);
        });

        it('with number bigger than 0', () => {
            let actualResult = () => new PaymentPackage('asd', -18);
            let expectedResult = 'Value must be a non-negative number';

            assert.throw(actualResult, expectedResult);
        });

        it('with valid arguments', () => {
            let actualResult = new PaymentPackage('house', 13);
            let expectedResult = 13;

            assert.equal(actualResult.value, expectedResult);
        });

    });

    describe('test VAT', () => {

        it('with invalid arguments', () => {
            let actualResult = new PaymentPackage('a', 8);
            let expectedResult = 'VAT must be a non-negative number';

            assert.throw(() => actualResult.VAT = 'unit', expectedResult);
        });

        it('with number bigger than 0', () => {
            let actualResult = new PaymentPackage('a', 8);
            let expectedResult = 'VAT must be a non-negative number';

            assert.throw(() => actualResult.VAT = -19, expectedResult);
        });

        it('with valid arguments', () => {
            let actualResult = new PaymentPackage('a', 8);
            let expectedResult = 20;

            assert.equal(actualResult.VAT, expectedResult);
        });
    });

    describe('test active', () => {

        it('with invalid arguments', () => {
            let actualResult = new PaymentPackage('b', 3);
            let expectedResult = 'Active status must be a boolean';

            assert.throw(() => actualResult.active = 'ok', expectedResult);
        });

        it('with valid arguments', () => {
            let actualResult = new PaymentPackage('b', 3);
            let expectedResult = true;

            assert.equal(actualResult.active, expectedResult);
        });

    });

    describe('test toString', () => {

        it('test 1', () => {
            let actualResult = new PaymentPackage('Horse', 1500);
            let expectedResult = `Package: Horse\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800`;

            assert.equal(actualResult.toString(), expectedResult);
        });

        it('test 2', () => {
            let actualResult = new PaymentPackage('Horse', 1500);
            actualResult.active = false;
            let expectedResult = `Package: Horse (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800`;

            assert.equal(actualResult.toString(), expectedResult);
        });

        it('test 3', () => {
            let actualResult = new PaymentPackage('Horse', 1500);
            actualResult.active = false;
            actualResult.VAT = 0;
            let expectedResult = `Package: Horse (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 0%): 1500`;

            assert.equal(actualResult.toString(), expectedResult);
        });

        it('test 4', () => {
            let actualResult = new PaymentPackage('Horse', 1500);
            actualResult.VAT = 0;
            let expectedResult = `Package: Horse\n- Value (excl. VAT): 1500\n- Value (VAT 0%): 1500`;

            assert.equal(actualResult.toString(), expectedResult);
        });

        it('test 5', () => {
            let actualResult = new PaymentPackage('Horse', 0);
            actualResult.VAT = 0;
            let expectedResult = `Package: Horse\n- Value (excl. VAT): 0\n- Value (VAT 0%): 0`;

            assert.equal(actualResult.toString(), expectedResult);
        });
    });
});
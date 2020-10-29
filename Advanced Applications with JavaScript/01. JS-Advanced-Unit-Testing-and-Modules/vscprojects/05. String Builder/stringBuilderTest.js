let assert = require('chai').assert;
let StringBuilder = require('./StringBuilder');

describe('stringBuilder', () => {
    let stringBuilder;
    let result;
    let expectedResult;

    beforeEach(() => {
        stringBuilder = new StringBuilder();
        result = null;
        expectedResult = null;
    });

    describe('constructor', () => {

        it('checks if it work without parameters', () => {
            let result = new StringBuilder();
            let expectedResult = [];

            assert.deepEqual(result._stringArray, expectedResult);
        });

        it('checks if it work with parameters', () => {
            let result = new StringBuilder('with');
            let expectedResult = ['w', 'i', 't', 'h'];

            assert.deepEqual(result._stringArray, expectedResult);
        });

        it('checks if it works with parameters different than string', () => {
            let result = () => new StringBuilder(5);
            let expectedResult = 'Argument must be string';

            assert.throw(result, expectedResult);
        });
    });

    describe('append', () => {

        it('Checks if appends with valid string 1st test', () => {
            stringBuilder.append('123');
            result = stringBuilder._stringArray;
            expectedResult = ['1', '2', '3'];

            assert.deepEqual(result, expectedResult);
        });

        it('Checks if appends with valid string 2nd test', () => {
            stringBuilder = new StringBuilder('123');
            stringBuilder.append('45');
            result = stringBuilder._stringArray;
            expectedResult = ['1', '2', '3', '4', '5'];

            assert.deepEqual(result, expectedResult);
        });

        it('Checks if appends with invalid argument', () => {
            result = () => stringBuilder.append(45);
            expectedResult = 'Argument must be string';

            assert.throw(result, expectedResult);
        });
    });

    describe('prepend', () => {

        it('Checks if prepends with valid arguments', () => {
            stringBuilder = new StringBuilder('as');
            stringBuilder.prepend('cl');

            result = stringBuilder._stringArray;
            expectedResult = ['c', 'l', 'a', 's'];

            assert.deepEqual(result, expectedResult);
        });

        it('Checks if prepends with invalid arguments', () => {
            result = () => stringBuilder.prepend({});
            expectedResult = 'Argument must be string';

            assert.throw(result, expectedResult);
        });
    });

    describe('insertAt', () => {

        it('Checks if insertsAt with valid arguments', () => {
            stringBuilder = new StringBuilder('okey');
            stringBuilder.insertAt('K', 2);

            result = stringBuilder._stringArray;
            expectedResult = ['o', 'k', 'K', 'e', 'y'];

            assert.deepEqual(result, expectedResult);
        });

        it('Checks if insertsAt with invalid arguments', () => {
            result = () => stringBuilder.insertAt(8);
            expectedResult = 'Argument must be string';

            assert.throw(result, expectedResult);
        });
    });

    describe('remove', () => {

        it('Checks if removes with valid arguments', () => {
            stringBuilder = new StringBuilder('1234567');
            stringBuilder.remove(0, 3);
            result = stringBuilder._stringArray;
            expectedResult = ['4', '5', '6', '7'];

            assert.deepEqual(result, expectedResult);
        });
    });

    describe('toString', () => {

        it('checks if it works with an empty array', () => {
            result = stringBuilder.toString();
            expectedResult = '';

            assert.equal(result, expectedResult);
        });

        it(' checks if it works without an empty array', () => {
            stringBuilder = new StringBuilder('123');
            stringBuilder.append('4');
            stringBuilder.remove(0, 2);

            result = stringBuilder.toString();
            expectedResult = '34';

            assert.equal(result, expectedResult);
        });
    });
});
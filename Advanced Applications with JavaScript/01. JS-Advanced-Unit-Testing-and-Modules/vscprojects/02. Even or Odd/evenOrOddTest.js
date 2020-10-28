let assert = require("chai").assert;
let isOddOrEven = require("./evenOrOdd");

describe("evenOrOdd", () => {
    
    it("check the type of the input - Boolean", () => {
        let result = isOddOrEven(false);
        assert.equal(result, undefined, "The result is not undefined");
    });

    it("check the type of the input - Number", () => {
        let result = isOddOrEven(20);
        assert.equal(result, undefined, "The result is not undefined");
    });

    it("check the string - even case", () => {
        let result = isOddOrEven("test");
        assert.equal(result, "even", "The result must be even");
    });

    it("check the string - odd case", () => {
        let result = isOddOrEven("tests");
        assert.equal(result, "odd", "The result must be odd");
    });
});
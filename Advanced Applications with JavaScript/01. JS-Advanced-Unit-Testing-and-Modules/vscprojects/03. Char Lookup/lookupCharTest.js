let assert = require("chai").assert;
let lookupChar = require("./lookupChar");

describe("lookupChar", () => {
    
    it("check the string with number type", () => {
        let result = lookupChar(55, 5);
        assert.equal(result, undefined, "The function did not return the correct result, so the result must be undefined");
    });

    it("check the index with string type", () => {
        let result = lookupChar("test", "testing");
        assert.equal(result, undefined, "The function did not return the correct result, so the result must be undefined");
    });

    it("check the index with floating number", () => {
        let result = lookupChar("test", 5.5);
        assert.equal(result, undefined, "The function did not return the correct result, so the result must be undefined");
    });

    it("check the index value and check, if it is bigger than the string length", () => {
        let result = lookupChar("test", 5);
        assert.equal(result, "Incorrect index");
    });

    it("check the index value and check, if is smaller than 0", () => {
        let result = lookupChar("test", -5);
        assert.equal(result, "Incorrect index");
    });

    it("check the correct result value with the correct parameters", () => {
        let result = lookupChar("test", 0);
        assert.equal(result, "t", "must equal to t");
    });
});
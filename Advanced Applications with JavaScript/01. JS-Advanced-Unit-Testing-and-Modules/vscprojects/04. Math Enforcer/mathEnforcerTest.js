let assert = require("chai").assert;
let mathEnforcer = require("./MathEnforcer");

describe("mathEnforcer", () => {

    describe("addFive", () => {

        it("check for invalid element", () => {
            let result = mathEnforcer.addFive("string");

            assert.equal(result, undefined, "Element must be a string");
        });

        it("check for correct element", () => {
            let result = mathEnforcer.addFive(5);
            let expectedResult = 10; 

            assert.equal(result, expectedResult, "Element must be a number");
        });

        it("check for negative element", () => {
            let result = mathEnforcer.addFive(-5);
            let expectedResult = -10;

            assert.equal(result, expectedResult, "Element must be a number");
        });

        it("check for floating point element", () => {
            let result = mathEnforcer.addFive(5.6);
            let expectedResult = 11.2;

            assert.equal(result, expectedResult, "Element must be a number");
        });
    });

    describe("subtractTen", () => {

        it("check for invalid element", () => {
            let result = mathEnforcer.subtractTen("string");

            assert.equal(result, undefined, "Element must be a string");
        });

        it("check for correct element", () => {
            let result = mathEnforcer.subtractTen(20);
            let expectedResult = 10;

            assert.equal(result, expectedResult, "Element must be a number");
        });

        it("check for negative element", () => {
            let result = mathEnforcer.subtractTen(-20);
            let expectedResult = -30;

            assert.equal(result, expectedResult, "Element must be a number");
        });

        it("check for floating point element", () => {
            let result = mathEnforcer.subtractTen(8.5);
            let expectedResult = -1.5;

            assert.equal(result, expectedResult, "Element must be a number");
        });
    });

    describe("sum", () => {

        it("check for invalid first element", () => {
            let result = mathEnforcer.sum("string", 5);

            assert.equal(result, undefined, "First element must be a string");
        });

        it("check for invalid second element", () => {
            let result = mathEnforcer.sum(5, "string");

            assert.equal(result, undefined, "Second element must be a string");
        });

        it("check for correct elements", () => {
            let result = mathEnforcer.sum(10, 5);
            let expectedResult = 15;

            assert.equal(result, expectedResult, "The elements must be numbers");
        });

        it("check for negative elements", () => {
            let result = mathEnforcer.sum(10, -10);
            let expectedResult = 0;

            assert.equal(result, expectedResult, "Element must be a number");
        });

        it("check for floating point elements", () => {
            let result = mathEnforcer.sum(59.8, 10.2);
            let expectedResult = 70;

            assert.equal(result, expectedResult, "Element must be a number");
        });

        it("check for negative floating point elements", () => {
            let result = mathEnforcer.sum(59.8, -10.2);
            let expectedResult = 49.6;

            assert.equal(result, expectedResult, "Element must be number");
        });
    });
});
(() => { //function solve()

    Array.prototype.last = function () {

        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) { //n = 0;

        return this.slice(n);
    };

    Array.prototype.take = function (n) { //n = 0;

        return this.slice(0, n);
    };

    Array.prototype.sum = function () {

        return this.reduce((acc, el) => acc + el, 0); //  if there is no current element we will have undefined, so for tha very reason we set an initial 0
    };

    Array.prototype.average = function () {
        return this.sum() / (this.length || 1);
    };
})();

let arrElements = [1, 2, 3, 4, 5];
console.log(arrElements.skip());
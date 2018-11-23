'use strict';

class Sorter extends Parent {
    constructor() {
        super();
        this.arr = [];
    }

    get length() {
        return this.arr.length;
    }

    add(element) {
        return this.arr.push(element);
    }

    sort(fn) {
        return this.arr.sort(fn);
    }

    map(fn) {
        let results = [];

        for (let i = 0; i < this.arr.length; i++) {
            results.push(fn(this.arr[i], i, this.arr));
        }
        return results;
    }

    filter(fn) {
        let results = [];

        for (let i = 0; i < this.arr.length; i++) {
            if (fn(this.arr[i], i, this.arr))
                results.push(this.arr[i]);
        }
        return results;
    }

    pushArray(array) {
        return this.arr.push(...array);
    }
}

class Fibonacci extends Sorter {
    constructor() {
        super();
    }

    get getFibonacci() {
        const baseArray = this.filter(function (item) {
            return Number(item) === item;
        });

        let resultArray = [];

        function fib(key) {
            return key <= 1 ? key : fib(key - 1) + fib(key - 2);
        }

        for (let key of baseArray) {
            resultArray.push(fib(key))
        }
        return resultArray;
    }
}

function Parent() {
};

Object.defineProperties(Parent.prototype, {
    toString: {
        value: function () {
            return "Sorter";
        }
    },
    valueOf: {
        value: function () {
            return this.length;
        }
    }
});

let fib = new Fibonacci();

fib.pushArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30]);

fib.getFibonacci;
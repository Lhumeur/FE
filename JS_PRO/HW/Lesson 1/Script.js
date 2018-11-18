'use strict';

class Sorter {
    constructor() {
        this.arr = [];
    }

    length() {
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

// Steps to Test:

/*
function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}

let a = new Sorter();
let c = [{a: 'lorem'}, 55, '12', 0, {}, -11];

a.add(2);
a.add({b: 'ipsum'});
a.add('z');
a.add(-2);
a.add(5);

a.length();

a.pushArray(c);

a;

a.map(function(item) {
  return item.toString();
});

b = a.filter(function(item) {
  return Number(item) === item;
});

a.sort(compareNumeric);
*/
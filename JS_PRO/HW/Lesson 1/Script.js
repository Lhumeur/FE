class Sorter {
    constructor() {
        this.arr = [];
    }

    length() {
        return this.arr.length;
    }

    add(element) {
        this.arr.push(element);
        return this.length();
    }

    sort() {
        this.arr.sort();
    }

    map() {
        return this.arr.map( element => element * 2);
    }

    filter() {
        return this.arr.filter( element => element > 0);
    }

    pushArray(array) {
        for (let element of array) {
            this.add(element);
        }
    }
}

/*
let a = new Sorter();
let b = [{a: 'lorem'}, 55, 'a', 3, {}, -11];

a.add(2);
a.add({b: 'ipsum'});
a.add('z');
a.add(-2);
a.add(5);

a.length();
a.pushArray(b);
a.map();
a.filter();
a.sort();
a.map();
a.filter();
a.pushArray(b);
a.length();
*/
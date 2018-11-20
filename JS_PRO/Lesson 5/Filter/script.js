'use strict';

const url = 'https://jsonplaceholder.typicode.com/todos';

let arrayLeft = [],
    arrayRight = [];

let filter = document.getElementById('filter'),
    sortBtn = document.getElementById('sortBtn'),
    leftList = document.getElementById('leftList'),
    rightList = document.getElementById('rightList');

fetch(url)
    .then(function (response) {
        if (!response.ok) {
            return Promise.reject(new Error(response.statusText))
        }
        return Promise.resolve(response)
    })
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        for (let i of data) {
            arrayLeft.push(i.title);
        }
        domCreator(listCreator(arrayLeft), 'left');
    })
    .catch(function (error) {
        alert('Ошибка: ' + error)
    })

const listCreator = function (array) {
    const fragment = document.createDocumentFragment();
    const li = document.createElement('li');

    for (const i of array) {
        const cloneLi = li.cloneNode();
        cloneLi.innerText = i;
        fragment.appendChild(cloneLi);
    }
    return fragment;
}

const domCreator = function (fragment, side) {
    if (side === 'left') {
        if (leftList.hasChildNodes()) {
            leftList.innerHTML = '';
        }
        leftList.appendChild(fragment);
    }
    if (side === 'right') {
        if (rightList.hasChildNodes()) {
            rightList.innerHTML = '';
        }
        rightList.appendChild(fragment);
    }
}

filter.addEventListener("keyup", function (event) {
    const newArray = arrayLeft.filter(item => item.search(event.target.value) !== -1);
    domCreator(listCreator(newArray), 'left');
})

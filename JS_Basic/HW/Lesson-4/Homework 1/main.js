var obj = {};

function isEmpty(obj) {
    for (var key in obj) {
        return !obj.hasOwnProperty(key);
    }
    return true;
}

function showMessage() {
    isEmpty(obj) ? alert('Объект пуст!') : alert('Объект полупуст!');
}

showMessage();

obj['talking ball'] = 'Пол колобка.';

showMessage();
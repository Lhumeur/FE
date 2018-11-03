var addRowBtn = document.getElementById('addRow'),
    tBody = document.getElementsByTagName('tbody')[0];

addRowBtn.onclick = function (event) {
    var newRow = document.createElement('tr');
    newRow.innerHTML = '<td></td><td></td><td></td>';

    var firstRow = tBody.children[0];
    tBody.insertBefore(newRow, firstRow);
};

tBody.addEventListener('click', insertInput, false);

function insertInput(event) {
    var target = event.target;

    if (target.tagName === 'TD' && target.id !== 'addRow') {
        target.innerHTML = '<input type="text" value="' + target.innerText + '">';

        var input = target.getElementsByTagName('input')[0];

        input.addEventListener('blur', setText, false);
        input.addEventListener('keypress', keyPress, false);

        input.focus();
    }
}

function setText(event) {
    var target = event.target;

    target.parentElement.innerText = target.value;
}

function keyPress(event) {
    if (event.keyCode == 13) {
        event.target.blur();
    }
}
var body = document.body,
    xValue = document.getElementById('xValue'),
    yValue = document.getElementById('yValue'),
    createBtn = document.getElementById('createBtn'),
    chessboard = document.createElement('div');

chessboard.classList.add('chessboard');

xValue.addEventListener('change', btnToggle, false);
yValue.addEventListener('change', btnToggle, false);

xValue.addEventListener('input', checkInput, false);
yValue.addEventListener('input', checkInput, false);

createBtn.onclick = function () {
    chessboard.innerHTML = '<table></table>';

    for (var y = 1; y <= +yValue.value; y++) {

        var newRow = document.createElement('tr');
        chessboard.childNodes[0].appendChild(newRow);

        for (var x = 1; x <= +xValue.value; x++) {
            var newCell = document.createElement('td');
            chessboard.childNodes[0].lastElementChild.appendChild(newCell);

            if ((x + y) % 2 !== 0) {
                chessboard.childNodes[0].lastElementChild.lastElementChild.classList.add('black-cell');
            }
        }
    }

    body.insertBefore(chessboard, body.lastElementChild);

    chessboard.childNodes[0].addEventListener('click', chessboardToggle, false);
}

function checkInput(event) {
    /^\d{1,2}$/.test(event.target.value) ? event.target.value : event.target.value = '';

    if (event.target.value === '0') {
        event.target.value = '1';
    } else if (event.target.value > 10) {
        event.target.value = '10';
    }
}

function btnToggle() {
    if (xValue.value === '' || yValue.value === '') {
        !createBtn.hasAttribute('disabled') ? createBtn.setAttribute('disabled', 'disabled') : false;
        !createBtn.classList.contains('button_disabled') ? createBtn.classList.add('button_disabled') : false;
    }
    else {
        createBtn.hasAttribute('disabled') ? createBtn.removeAttribute('disabled') : false;
        createBtn.classList.contains('button_disabled') ? createBtn.classList.remove('button_disabled') : false;
    }
}

function chessboardToggle() {
    var dtCollection = document.getElementsByTagName('td');

    for (var i = 0; i < dtCollection.length; i++) {
        dtCollection[i].classList.toggle('black-cell');
    }
}
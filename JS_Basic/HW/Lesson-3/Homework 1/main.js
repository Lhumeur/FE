var login,
    password;

login = prompt('Введите логин:');

if (login === 'Админ') {
    password = prompt('Введите пароль:')

    if (password === 'Чёрный Властелин') {
        alert('Добро пожаловать!');
    } else if (password == null) {
        showMessage();
    } else {
        alert('Пароль неверен.');
    }
} else if (login == null) {
    showMessage();
} else {
    alert('Я вас не знаю.');
}

function showMessage() {
    alert('Вход отменён.');
}
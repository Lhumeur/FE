var login,
    message;

login = prompt('Введите логин:');

login === 'Вася' ? message = 'Привет' :
    login === 'Директор' ? message = 'Здравствуйте' :
        login === '' ? message = 'Нет логина' : message = '';

alert(message);
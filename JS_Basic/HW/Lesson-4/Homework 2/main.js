var x = Number(prompt('Введите число "x":', '1'));
var n = Number(prompt('Введите натуральное значение числа для степени "n":', '2'));

// Первый не красивый вариант:
//isNumber(x) ? isNatural(n) ? alert('Число "' + x + '" в степени "' + n +'" = ' + pow(x, n)) : alert('Введенная степень "n" не является натуральным числом! Обновите страницу!') : alert('Введенное число "x" не является числом! Обновите страницу!');

!isNumber(x) ? alert('Введенное число "x" не является числом! Обновите страницу!') :
    !isNatural(n) ? alert('Введенная степень "n" не является натуральным числом! Обновите страницу!') :
        alert('Число "' + x + '" в степени "' + n + '" = ' + pow(x, n));


function isNumber(number) {
    return !isNaN(number) && isFinite(number) || false;
}

function isNatural(number) {
    // instead '(number ^ 0) === number' also can be used 'number % 1 == 0' or 'Number.isInteger(number)'
    return !isNaN(number) && number > 0 && (number ^ 0) === number || false;
}

function pow(x, n) {
    return Number(Math.pow(x, n).toFixed(10));
}
var vowelLetters = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я', 'a', 'e', 'i', 'o', 'u', 'y'],
    s = prompt('Введите строку:', '');

s == '' ? alert('Строка пуста!') : alert('Количество гласных в строке "' + s + '" равно: ' + vowelCount(s));

function vowelCount(string) {
    var count = 0;

    string = string.toLowerCase();
    string.split('').forEach(function (char) {
        vowelLetters.includes(char) && count++;
    });

    return count;
}
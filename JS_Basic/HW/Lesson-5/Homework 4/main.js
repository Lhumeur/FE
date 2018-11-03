var s = prompt('Введите текст:', '');

if (s == '') {
    alert('Строка пуста!');
} else {
    alert('Исходный текст: \n' + s + '\n\n Результат:' + textTransform(s));
}

function textTransform(text) {
    var tempArr = new Array(),
        arr = text.replace(/!/g, '.').replace(/\?/g, '.').split('.');

    for (var i = 0; i < arr.length; i++) {
        // Удаляем пробелы в начале и конце каждого предложения
        arr[i] = arr[i].trim();

        if (arr[i] != '') {
            tempArr.push('\n' + arr[i] + ' ' + (arr[i].toString().replace(/ /g, '').replace(/,/g, '').replace(/:/g, '').replace(/;/g, '').replace(/—/g, '').replace(/-/g, '')).length);
        }
    }
    return tempArr;
}
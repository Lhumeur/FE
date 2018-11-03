var string1 = prompt('Введите первое слово (строку):', ''),
    string2 = prompt('Введите второе слово (строку):', '');

if (string1 == '') {
    alert('Первое слово (строка) пусто!');
} else if (string2 == '') {
    alert('Второе слово (строка) пусто!');
} else {
    isAnagram(string1, string2) ? alert('Слова (строки)"' + string1 + '" и "' + string2 + '" - анаграммы!') : alert('Слова (строки)"' + string1 + '" и "' + string2 + '" не являеются аннаграммами.');
}

function isAnagram(firstString, secondString) {
    var tempArr,
        arr = firstString.toLowerCase().split(''),
        s = secondString.toLowerCase();

    if (arr.length == s.length) {
        tempArr = arr;

        for (var i = 0; i < s.length; i++) {
            for (var j = 0; j < arr.length; j++) {
                if (s.substr(i, 1) == arr[j]) {
                    tempArr.splice(j, 1);
                    break;
                }
            }
        }
        if (tempArr.length == 0) return true;
    }
    return false;
}
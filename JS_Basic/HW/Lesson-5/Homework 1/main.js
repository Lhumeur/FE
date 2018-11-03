var s = prompt('Введите стоку:', '');

if (s == ''){
    alert('Строка пуста!');
} else {
    isPalindrome(s) ? alert('Строка "' + s + '" - палиндром!') : alert('Строка "' + s + '" не является палиндромом.');
}

function isPalindrome(string) {
    return string.toLowerCase() == string.split('').reverse().join('').toLowerCase();
}
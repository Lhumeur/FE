var arr = [],
    count = Number(prompt('Укажите количество элементов массива:', 10));

if (!isNaN(count) && isFinite(count)) {
    arr = arrayGeneration(count, -100, 100);

    if (count > 10) {
        alert('Исходный и отсортированный массивы Вы можете найти в консоли (F12 -> закладка "Console").');
        console.log('Исходный массив:');
        console.log(arr);
        console.log('Отсортированный массив:');
        console.log(bubbleSort(arr));
    } else {
        alert('Исходный массив: \n' + arr + '\n\nОтсортированный по возрастанию массив:\n' + bubbleSort(arr));
    }
} else {
    alert('Вы ввели не число! Обновите страницу!');
}

function arrayGeneration(iteration, N, M) {
    var tempArr = [];

    for (var i = 0; i < iteration; i++) {
        tempArr.push(randomRange(N, M));
    }
    return tempArr;
}

function randomRange(N, M) {
    return Math.floor(
        Math.random() * (M - N + 1)
    ) + N;
}

function bubbleSort(array) {
    var flag = false;

    for (var i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            flag = true;
            [array[i], array[i + 1]] = [array[i + 1], array[i]];
        }
    }
    if (flag) {
        return bubbleSort(array);
    } else {
        return array;
    }
}
var arr = new Array(10);

for (var i = 0; i < 10; i++) {
    arr[i] = i + 1;
}

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        alert(arr[i]);
    }
}
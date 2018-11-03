var objOrigin,
    objClone;

objOrigin = {
    simple_property: 'Hello',
    object_property: {
        user_1: 'Петя',
        user_2: 'Вася'
    },
    array_property: ['первый', 'второй'],
    function_property: function (user) {
        alert(this.simple_property + ', ' + this.object_property[user] + '. Массив: ' + this.array_property);
    }
}

objClone = deepCopy(objOrigin);

objOrigin.simple_property = 'Bye!';
objOrigin.object_property.user_1 = 'Коля';
objOrigin.array_property = ['пятый', 'десятый'];

objOrigin.function_property('user_1');
objClone.function_property('user_1');

function deepCopy(obj) {
    if (typeof obj !== "object" || !obj)
        return obj;

    var copy;
    if (Array.isArray(obj)) {
        copy = [];
        for (var key = 0; key < obj.length; key++) {
            copy[key] = deepCopy(obj[key]);
        }
        return copy;
    }
    if (Object.prototype.toString.call(obj) !== "[object Object]")
        return obj;

    copy = {};
    for (var key in obj)
        copy[key] = deepCopy(obj[key]);
    return copy;
}
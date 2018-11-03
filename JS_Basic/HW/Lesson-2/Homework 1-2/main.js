var a,
    b,
    operation,
    result;

a = Number(prompt('Введите первое число', 0));

if (!isNaN(a) && isFinite(a)) {
  
  b = Number(prompt('Введите второе число', 0));
  
  if (!isNaN(b) && isFinite(b)) {
    operation = prompt('Введите математическую операцию: +, -, *, /.');
    
    switch (operation) {
        
      case '+':
        result = Number((a + b).toFixed(10));
        alert('Результат сложения равен: ' + result);
        break;
        
      case '-':
        result = Number((a - b).toFixed(10));
        alert('Результат вычитания равен: ' + result);
        break;
              
      case '*':
        result = Number((a * b).toFixed(10));
        alert('Результат умножени равен: ' + result);
        break;
      
      case '/':
        if (b == 0){
          alert('Делить на ноль низяяяя!!! Обновите страницу!');
          break;
        }
        result = Number((a / b).toFixed(10));
        alert('Результат деления равен: ' + result);
        break;
              
      default:
        alert('Вы ввели не верную математическую операцию! Обновите страницу!');
    }
  }
  else {
    alert('Вы ввели не число! Обновите страницу!');
  }
}
else {
  alert('Вы ввели не число! Обновите страницу!');
}
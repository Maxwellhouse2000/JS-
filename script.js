// let number = parseInt(prompt("Введите любое целое положительное число: "));
// let sum = 0;
// for (let i = 1; i <= number; i++) {
//   sum += i;
// }
// console.log`(Сумма чисел от 1 до ${number} равна ${sum})` ;

let number1, number2;

// Запрашиваем первое число у пользователя
do {
  number1 = prompt("Введите первое число от 1 до 10:");
} while (number1 < 1 || number1 > 10 || isNaN(number1));

// Запрашиваем второе число у пользователя
do {
  number2 = prompt("Введите второе число от 1 до 10:");
} while (number2 < 1 || number2 > 10 || isNaN(number2));

// Создаем таблицу умножения
let result = "";
for (let i = 1; i <= number1; i++) {
  for (let j = 1; j <= number2; j++) {
    result += `${i} x ${j} = ${j}= ${i*j}\\t`;
  }
  result += "\n";
}

// Выводим таблицу умножения на экран
console.log(result);

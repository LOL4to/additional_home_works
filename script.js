let num = 266219;
let numHelp = 1; // для начального значения и помощи в цикле
for (let i = 0; i < String(num).length; i++) {
  // число num в строку, затем перебираем каждую цифру
  numHelp *= Number(String(num)[i]); // переумножаем каждую цифру и переводим тип переменной обратно из string в number
}
console.log(
  "Мой 1й способ с циклом for: " + String(numHelp ** 3).substring(0, 2)
);

// 2й способ решения задачи, с помощью метода reduce:
let numArray = String(num).split("").map(Number); // преобразуем число в строку, разделим на массив,
// и преобразуем обратно в число, получив массив из чисел
let numMulti = numArray.reduce(function (initial, current) {
  // initial = a[0]
  return initial * current;
});
console.log("2й способ с reduce: " + String(numMulti ** 3).substring(0, 2));

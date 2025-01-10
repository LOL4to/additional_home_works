let num = 266219;
let numHelp = 1; // для начального значения и помощи в цикле
for (let i = 0; i < String(num).length; i++) {
  // число num в строку, затем перебираем каждую цифру
  numHelp *= Number(String(num)[i]); // переумножаем каждую цифру и переводим тип переменной обратно из string в number
}

console.log(String(numHelp ** 3).substring(0, 2));

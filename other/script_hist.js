"use strict";
// Additional Lesson 02 ---------------------
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

//
//
// Additional Lesson 03 ---------------------
// используя if-else:
let lang = prompt("Выберите язык:", "ru, en");
if (lang == "ru") {
  console.log(
    "Понедельник\n",
    "Вторник\n",
    "Среда\n",
    "Четверг\n",
    "Пятница\n",
    "Суббота\n",
    "Воскресенье"
  );
} else if (lang == "en") {
  console.log(
    "Monday\n",
    "Tuesday\n",
    "Wednesday\n",
    "Thursday\n",
    "Friday\n",
    "Saturday\n",
    "Sunday"
  );
} else {
  console.log("Выберите 'ru' или 'en'");
}

// используя switch:
switch (lang) {
  case "ru":
    console.log(
      "Понедельник\n",
      "Вторник\n",
      "Среда\n",
      "Четверг\n",
      "Пятница\n",
      "Суббота\n",
      "Воскресенье"
    );
    break;
  case "en":
    console.log(
      "Monday\n",
      "Tuesday\n",
      "Wednesday\n",
      "Thursday\n",
      "Friday\n",
      "Saturday\n",
      "Sunday"
    );
    break;
  default:
    console.log("Выберите 'ru' или 'en'");
}

// используя многомерный массив:
let langArr = lang.split();
let myArr = [
  [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
];

String(langArr) == ["ru"] || String(langArr).includes("en") == true // использ. 2 способа сравн для интереса
  ? String(langArr) == ["ru"]
    ? console.log(myArr[0])
    : console.log(myArr[1])
  : console.log("Выберите ru или en!");

//----// следующая задачка
let namePerson = prompt("Введите имя!");
console.log(namePerson);
namePerson === "Артем" || namePerson === "Александр"
  ? namePerson === "Артем"
    ? console.log("директор")
    : console.log("преподаватель")
  : console.log("студент");

//
//
// Additional Lesson 04 ---------------------
let myVar = "Эта строка займёт 29 символов";
const testVar = function (varCheck, callback) {
  return console.log(
    typeof varCheck === "string" ? callback(varCheck) : "это не строка" // Если в качестве аргумента передана не строка - функция оповещает об этом пользователя
  );
};
const strFunc = function (str) {
  if (str.length < 30) {
    return str.trim(); // В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце
  } else return str.trim().substr(0, 29) + "..."; // Если строка более 30 знаков - то после 30го символа часть текста скрывается и вместо них появляются три точки (...)
};
testVar(myVar, strFunc);

//
//
// Additional Lesson XX ---------------------

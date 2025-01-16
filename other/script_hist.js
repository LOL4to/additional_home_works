"use strict";

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

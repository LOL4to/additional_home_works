"use strict";

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

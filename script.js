"use strict";
let week = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

let myDate = new Date();
let toDay = new Date();

//т.к. отсчёт в объекте воскресенье new Date начинается с 0,
// нужно передвинуть дни, чтобы соот-ть элементам массива
myDate.setDate(toDay.getDay() + 6);

//число дня недели
let dayOfWeek = myDate.getDate();

// вывод "суббота" и "воскресенье" курсивом + вывод на экран
const myArr2 = week.findIndex(function (item) {
  if (item === "Суббота" || item === "Воскресенье") {
    document.write(item.italics() + "<br>");
  } else document.write(item + "<br>");
});

// обращение к эл-ту массива и выделяем жирным текущий день
for (let key in week) {
  if (myDate.getDate() == key) {
    document.write(week[key].bold());
  }
}
console.log(dayOfWeek);

// let newArrRow = [];
// for (let i = 0; i < week.length; i++) {
//   newArrRow = week + "\n";
//   if (newArrRow == toDay) {
//     document.write(newArrRow.bold() + "11231fgsdg" + "<br>");
//   }
// }
// console.log(newArrRow);

const days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];
const minSecArr = {
  0: [1, 21, 31, 41, 51],
  1: [2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54],
  2: [
    0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 26, 27,
    28, 29, 30, 35, 36, 37, 38, 39, 40, 45, 46, 47, 48, 49, 50, 55, 56, 57, 58,
    59,
  ],
};
let data = new Date();
let minRes = "";
let secRes = "";
let day = data.getDay();
let monthNum = data.setMonth(data.getMonth());
let month = months[data.getMonth()];
let hours = data.getHours();
let min = data.getMinutes();
let sec = data.getSeconds();

//метод глоб объектпа вып. код с интервалом(в мс), stop кода с clearInterval()
const currentDataShort = function () {
  //переменные для задания б)
  let data1 = new Date();
  let timeDMY = data1.toLocaleDateString();
  let timeHSMs = data1.toLocaleTimeString();
  let currentDataShort = timeDMY + " " + "-" + " " + timeHSMs;
  document.getElementById("time-Short").innerHTML = currentDataShort;
};
//------------------------------------------------------------------------------
//склонение ЧАС(-/-а/-ов)
const newData = function (numHour) {
  let newNum = "";
  switch (true) {
    case numHour == 1:
      newNum = "час";
      return newNum;
    case numHour == 21:
      newNum = "час";
      return newNum;
    case 1 < numHour && numHour < 5:
      newNum = "часа";
      return newNum;
    case 21 < numHour && numHour <= 24:
      newNum = "часа";
      return newNum;
    case numHour == 0:
      newNum = "часов";
      return newNum;
    case 5 <= numHour && numHour < 21:
      newNum = "часов";
      return newNum;
    default:
      newNum = "##";
  }
};

//склонение МИНУТ(-/-а/-ы)
const timeMinFunc = function (min) {
  min[0].findIndex(function (item, index, array) {
    if (data.getMinutes() == item) {
      minRes = "минута";
    }
  });
  min[1].findIndex(function (item, index, array) {
    if (data.getMinutes() == item) {
      minRes = "минуты";
    }
  });
  min[2].findIndex(function (item, index, array) {
    if (data.getMinutes() == item) {
      minRes = "минут";
    }
  });
};

//склонение СЕКУНД(-/-а/-ы)
const timeSecFunc = function (sec) {
  sec[0].findIndex(function (item, index, array) {
    if (data.getSeconds() == item) {
      secRes = "секунда";
    }
  });
  sec[1].findIndex(function (item, index, array) {
    if (data.getSeconds() == item) {
      secRes = "секунды";
    }
  });
  sec[2].findIndex(function (item, index, array) {
    if (data.getSeconds() == item) {
      secRes = "секунд";
    }
  });
};

timeMinFunc(minSecArr);
timeSecFunc(minSecArr);

//------------------------------------------------------------------------------
let currentData =
  "Сегодня " +
  days[day] +
  ", " +
  data.getDate() +
  " " +
  months[data.getMonth()] +
  " " +
  data.getFullYear() +
  " года" +
  ", " +
  data.getHours() +
  " " +
  newData(hours) +
  " " +
  data.getMinutes() +
  " " +
  minRes +
  " " +
  data.getSeconds() +
  " " +
  secRes;
//------------------------------------------------------------------------------
document.getElementById("time").innerHTML = currentData;
setInterval(currentDataShort, 1000);

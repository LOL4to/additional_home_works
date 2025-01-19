"use strict";
// Additional Lesson 05 ---------------------
// 1)
let arr = ["12", "256", "784", "41", "94", "4841", "2009"];
let arrCheck = arr.filter(function (num) {
  if (num[0] == 2 || num[0] == 4) {
    return true;
  } else {
    return false;
  }
});
console.log(arrCheck);

// 2)
// если при делении числа от 2 до 100 (varSimp) будет оставаться остаток, отличный от 0, то это true -> выводим в консоли ф-ции
const simpleCheck = function (varSimp) {
  for (let i = 2; i < varSimp; i++) {
    if (varSimp % i === 0) return false; //если остаток 0, значит число составное
  }
  return true;
};
//просто вызыв ф-цию simpleCheck + выводит простые числа в консоль
function simplePrint(varPrint) {
  for (let i = 2; i <= varPrint; i++) {
    if (simpleCheck(i)) console.log("Делители этого числа: 1 и " + i);
  }
}
simplePrint(100);

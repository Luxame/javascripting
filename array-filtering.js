var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filtered = numbers.filter(function (number) {
  return number % 2 === 0;
});
console.log(filtered);
// 定義一個陣列numbers裡面數字為1~10
// 定義filtered把numbers代入function中
// 輸出結果

const arr = [1, 2, 3, 4];
//map function implementation asked in frontend interview Questions
Array.prototype.myMap = function (fn) {
  let arr = this;
  let updatedData = [];
  for (let i = 0; i < arr.length; i++) {
    updatedData.push(fn(arr[i], i));
  }
  return updatedData;
};
console.log(arr.myMap((x, index) => x * 2 + index));

//filter function implementation asked in frontend interview Questions
Array.prototype.myFilter = function (fn) {
  let arr = this;
  let updatedData = [];
  for (let i = 0; i < arr.length; i++) {
    const canPushItem = fn(arr[i]);
    if (canPushItem) {
      updatedData.push(arr[i]);
    }
  }
  return updatedData;
};
console.log(arr.myFilter((x) => x >= 2));

//reduce
Array.prototype.myReduce = function (fn, initialValue) {
  let arr = this;
  let sum = initialValue;
  for (let i = 0; i < arr.length; i++) {
    sum = fn(sum, arr[i]);
  }
  return sum;
};
console.log(arr.myReduce((sum, a) => sum + a, 0));

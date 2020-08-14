/**
 * @description 请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0 来代替
 * @description 气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数
 * @param {number[]} T
 * @return {number[]}
 */
// return [1, 1, 4, 2, 1, 1, 0, 0];
var T = [73, 74, 75, 71, 69, 72, 76, 73];

// TODO: 添加注释
var dailyTemperatures = function(T) {
  var length = T.length;
  var res = new Array(length).fill(0);
  var stack = [];
  for (let i = 0; i < length; i++) {
    while(stack.length && stack[stack.length - 1].value < T[i]) {
      const { index, value } = stack.pop();
      res[index] = i - index;
    }
    stack.push({
      index: i, 
      value: T[i],
    });
  }
  return res;
};

const res = dailyTemperatures(T);
console.log(res);
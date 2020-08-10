/**
 * @description 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？n是一个正整数！
 * @param {number} n
 * @return {number} res
 * @example 
 * // returns 3, 11,12,21
 * main(3) 
 */

const n = 10;

function main(n) {
  // if (n === 1 || n === 2) {
  //   return n;
  // }
  // return main(n - 1) + main(n - 2);
  const dp = [];
  dp.push(0,1,2);
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2]
  }
  return dp[n];
}

console.log(main(n)); // 89
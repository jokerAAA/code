/**
 * @description 给定一个含有 n 个正整数的数组和一个正整数 s,找出该数组中满足其和 ≥ s的长度最小的连续子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。
 * @param {number} s 
 * @param {Array} nums
 * @return {number} res
 * @example 
 * // returns 2
 * main(7, [2,3,1,2,4,3])
 */

const s = 7;
const nums = [2,3,1,2,4,3];
function main(s, nums) {
  let length = nums.length;
  if (length === 0) {
    return 0;
  }
  let sum = 0;
  // 用双指针做滑动窗口
  let start = 0;
  let end = 0;
  let res = Number.MAX_SAFE_INTEGER;
  while(end < length) {
    sum += nums[end];
    // 满足条件时移动头指针,缩写窗口范围,直到不满足
    while(sum >= s) {
      res = Math.min(res, end - start + 1);
      sum -= nums[start]
      start++;
    }
    // 不满足条件时移动尾指针，扩大窗口范围,直到满足
    end++;
  }
  return res === Number.MAX_SAFE_INTEGER ? 0 : res;
}

console.log(main(s, nums)); // 2
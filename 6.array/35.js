/**
 * @description 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。你可以假设数组中无重复元素。
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * @example nums = [1,3,5,6], target = 5, return 2
 * @example nums = [1,3,5,6], target = 2, return 1
 * @example nums = [1,3,5,6], target = 7, return 4
 * @example nums = [1,3,5,6], target = 0, return 0
 */

var searchInsert = function(nums, target) {
  let index = 0;
  const length = nums.length;
  for (; index < length; index++) {
    if (nums[index] < target) {
      continue;
    } else if (nums[index] === target) {
      break;
    } else {
      break;
    }
  }
  return index;
};
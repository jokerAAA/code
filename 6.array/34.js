/**
 * @description 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * @description 如果数组中不存在目标值，返回 [-1, -1]。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  var startIndex = 0, endIndex = 0;
  var length = nums.length;
  var flag = false;
  for (let i = 0;i < length; i++) {
    if (nums[i] < target) {
      continue;
    } else if (nums[i] > target) {
      break;
    } else {
      if (!flag) {
        startIndex = endIndex = i;
        flag = true;
      } else {
        endIndex++;
      }
    }
  }
  if (!flag) {
    return [-1, -1]
  } else {
    return [startIndex, endIndex];
  }
};
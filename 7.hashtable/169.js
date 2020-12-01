

/**
 * @description 找出数组中出现次数找过一半的元素
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  var map = {};
  var length = nums.length;
  for (let i = 0; i < length; i++) {
    let num = nums[i]
    if (map[num] == undefined) {
      map[num] = 1;
    } else {
      let count = map[num];
      if (count > length / 2) {
        return num;
      } else {
        map[num] = map[num]++;
      }
    }
  }
  var max = 0;
  var res = 0;
  for (let key in map) {
    if (map[key] > max) {
      max = map[key];
      res = key;
    }
  }
  return res;
};
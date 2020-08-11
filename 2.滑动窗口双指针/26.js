/**
 * @description 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 * @description 必须修改原始数组,不需要考虑超出数组长度后的元素
 * @param {Array} nums 排序后的数组
 * @return {number} n 排序后数组长度
 * 
 */

const nums = [0,0,1,1,1,2,2,3,3,4];

function main(nums) {
  let startIndex = 0;
  let endIndex = 1;
  const length = nums.length;
  while(endIndex < length) {
    // 由于没有额外空间，且数组为排序好的数组，所以这里使用双指针来遍历数组，此时存在两种情况：
    // 1、 当双指针元素相同时，说明前后元素相同
    // 2、 双指针元素不同时，说明前后元素不同，修改慢指针下一位的数组元素为快指针对应值，并移动慢指针
    // 判断完成后移动快指针进行下一个位置元素的遍历
    if (nums[startIndex] !== nums[endIndex]) {
      nums[startIndex + 1] = nums[endIndex];
      startIndex++;
    }
    endIndex++;
  }
  return startIndex + 1;
}

console.log(main(nums));
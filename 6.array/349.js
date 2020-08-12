/**
 * @description 给定两个数组，编写一个函数来计算它们的交集。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 输出结果是唯一的，不用考虑顺序
 */

// return [4,9]
var nums1 = [4,9,5], nums2 = [9,4,9,8,4];

var intersection = function(nums1, nums2) {
  let res = [];
  let map = {};
  // 理论上来说做去重后遍历小数组转化为set会更快，在后面遍历大数组时部分场景下可以提前终止
  nums1.forEach(v => {
    map[v] = v;
  })
  nums2.forEach(v => {
    // 考虑0的场景
    if (map[v] !== undefined) {
      res.push(v);
    }
  })
  // 对结果做去重
  return [...new Set(res)];
};
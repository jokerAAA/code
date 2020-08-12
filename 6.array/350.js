/**
 * @description 给定两个数组，编写一个函数来计算它们的交集。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。不考虑顺序
 */
var intersect = function(nums1, nums2) {
  let res = [];
  let map = {};
  nums1.forEach(v => {
    if (!map[v]) {
      map[v] = 1;
    } else {
      map[v] += 1;
    }
  })
  nums2.forEach(v => {
    if (map[v] && map[v] > 0) {
      res.push(v);
      map[v] = map[v] - 1;
    }
  })
  return res;
};

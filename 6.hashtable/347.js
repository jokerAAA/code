/**
 * @description 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// return [1, 2]
// var nums = [1,1,1,2,2,3], k = 2;
var nums = [3, 0, 1, 0], k = 1;

// 核心思路：
// 1， 遍历数据，用map存储整数和出现频率的对应关系
// 2. 怎么获取map中频率前k的元素：出现频率前k的元素考虑用堆排序，这里频率均是正整数，可以考虑用桶排序来处理
// 3. 以频率作为bucket的index， 将对应的元素作为bucket的el，由于这里一个频率可能有多个元素，所以el用数组来存储。
// 4. 处理完成后遍历bucket，取出前k个元素即可

var topKFrequent = function(nums, k) {
  var map = new Map();
  nums.forEach(v => {
    if (map.get(v) === undefined) {
      map.set(v, 1);
    } else {
      map.set(v, map.get(v) + 1);
    }
  })
  // 边际情况处理：如果k超标，直接返回即可
  if(map.size <= k) {
    return [...map.keys()]
  }
  var res = bucketSort(map, k);
  return res;
};

/**
 * 
 * @param {Map} map @example {1:3, 2:3, 3:4},key表示整数，value表示出现次数
 * @param {Number} k 
 */
function bucketSort(map, k) {
  var arr = [];
  var res = [];
  // 这里使用桶排序,以出现次数作为桶的index,value中存储的是出现次数对应的整数，由于可能出现1个出现次数对应多个数字的场景，所以使用arr来存储
  // map遍历完成后，将桶排序的数组进行倒叙遍历，取出k个整数即可
  map.forEach((value, key) => {
    if (!arr[value]) {
      arr[value] = [key]
    } else {
      arr[value].push(key)
    }
  })
  for (var i = arr.length - 1; i >=0 && res.length < k; i--) {
    if (arr[i]) {
      res.push(...arr[i])
    }
  }
  return res;
}

topKFrequent(nums, k);
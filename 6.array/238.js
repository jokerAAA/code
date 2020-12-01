/**
 * 
 * 给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。

 

示例:

输入: [1,2,3,4]
输出: [24,12,8,6]
 

提示：题目数据保证数组之中任意元素的全部前缀元素和后缀（甚至是整个数组）的乘积都在 32 位整数范围内。

说明: 请不要使用除法，且在 O(n) 时间复杂度内完成此题。

进阶：
你可以在常数空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组不被视为额外空间。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    if (nums.length < 2) {
        return nums;
    }
    // 思路1： 用除法，先计算所有的沉积，然后除以当前数字即可；问题：出现0时无法解决
    // 思路2：遍历后计算分别计算左边和右边的沉积，然后相乘即可。问题： 其实是一个重复计算的过程，在索引一次增大的过程，其实左边的沉积是可以利用的，同理可以思考右边的乘机反向遍历的过程中其实也是可以重复利用的
    // 思路3: 正向遍历暂存左边的沉积，重复利用前一项的积
    var left = [];
    var res = 1;
    var length = nums.length;
    // 只计算左边的
    for(let i = 1; i < length;i++) {
        res = res * nums[i - 1];
        left.push(res) // left长度始终比nums的长度小一位，不包含nums的最后一位 
    }
    res = 1;
    for(let i = length - 1;i > 0;i--) {
        left[i] = res * left[i - 1];
        res = res * nums[i]; // 用res缓存右侧的乘机，然后和当前的乘机进行累加；
    }
    left[0] = res;
    return left;
};
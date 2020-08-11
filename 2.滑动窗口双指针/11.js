/**
 * @description 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
 * 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 说明：你不能倾斜容器，且 n 的值至少为 2
 * @param {Array} height
 * @return {number} water
 * @example
 * // return 49
 * main([1,8,6,2,5,4,8,3,7])
 */

 const height = [1,8,6,2,5,4,8,3,7];

 function main(height) {
   let start = 0;
   let end = height.length - 1;
   let res = 0;
   while(start < end) {
     // 高取最小值，宽取差值
     let h = Math.min(height[start], height[end]);
     let w = end - start;
     res = Math.max(res, w * h);
     // 计算完毕后移动短板,因为计算面积时计算的w*h,移动长板时,宽度一定减少,高度不可能增加,所以面积一定是变小的
     if (height[start] < height[end]) {
       start++;
     } else {
       end--;
     }
   }
   // 为什么双指针可以得到正确答案:这是一个不断缩小范围的过程：
   // 假设有i < j, h[i] < h[j],这种时候移动i变为i+1,表示我们放弃了从i到j-1的范围,但是这个范围内的短板是h[i],宽度一定是小于j-i的，所以最终面积一定小于ij之间的面积,所以可以直接放弃
   return res;
 }

 console.log(main(height)) // 49
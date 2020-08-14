/**。
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @description 给定一个非空二叉树，返回其最大路径和
 * @description 本题中，路径被定义为一条从树中任意节点出发，达到任意节点的序列。该路径至少包含一个节点，且不一定经过根节点
 * @param {TreeNode} root
 * @return {number}
 */

// TODO: 思路不完善，需要补充
// 思路
// 1. 对节点进行遍历，求出穿过该节点的子树最大路径只和即可，如果最终答案没有贯穿以该节点为根节点的子树，那么换个角度来思考，其实它穿过的是子树的根节点，所以递归时处理时一样的
// 2. 子树内部的节点路径和 = 左子树节点和 + 根节点值 + 右子树节点和
var maxPathSum = function(root) {
  var maxSum = Number.MIN_SAFE_INTEGER;
  function fn(root) {
    if (root === null) {
      return 0;
    }
    // 分别求左子树和右子树的子树和，当子树和为负数时，可以直接舍弃只取该节点，所以这里和0比较最大值
    const left = Math.max(fn(root.left), 0);
    const right = Math.max(fn(root.right), 0);
    // 最大值由左子树 + 右子树 + 根节点决定
    // 而左右子树在计算时只会取到某个节点的具体值
    maxSum = Math.max(maxSum, left + right + root.val);
    // 返回一个某个节点的子树能提供的最大和：由该节点的左子树和右子树中较大者和节点值只和
    return root.val + Math.max(left, right);
  }
  fn(root);
  return maxSum;
};


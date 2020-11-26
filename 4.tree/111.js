/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @description 求二叉树最小深度
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  // 节点为空时表示返回
  if (root == null) {
    return 0;
  }
  var left = minDepth(root.left);
  var right = minDepth(root.right);
  // 子节点均存在深度，取较小的
  if (left > 0 && right > 0) {
    return Math.min(left, right) + 1
  } else {
    // 存在空子节点时，放弃空子节点
    return (left || right) + 1;
  }
};
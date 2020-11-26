/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @description 返回n叉树的最大深度
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root == null) {
      return 0;
    }
    var children = root.children;
    var res = 0;
    children.forEach(v => {
      res = Math.max(maxDepth(v), res)
    })
    return res + 1;
};
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @description 返回n叉树的后续遍历
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    if (root == null) {
      return []
    }
    var res = [];
    var dfs = (root) => {
      if (root == null){
        return;
      }
      if (root.children != null && root.children.length > 0) {
        for (let i = 0; i < root.children.length; i++) {
          dfs(root.children[i])
        }

      }
      res.push(root.val);
    }
    dfs(root);
    return res;
};

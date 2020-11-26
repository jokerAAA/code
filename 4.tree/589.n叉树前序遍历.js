/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    var res = [];
    var dfs = (root) => {
      if (root == null) {
        return;
      }
      res.push(root.val);
      let children = root.children;
      if (children != null && children.length > 0) {
        for(let i = 0; i < children.length; i++) {
          dfs(children[i])
        }
      }
    }
    dfs(root);
    return res;
};

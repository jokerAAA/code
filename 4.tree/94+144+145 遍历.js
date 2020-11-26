/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @description 给定一个二叉树，返回它的中序遍历
 * @param {TreeNode} root
 * @return {number[]}
 * @example
 * 
 */

 // 前序遍历：中左右
 // 中序遍历：左中右
 // 后序遍历：左右中

// 前序遍历
function preorderTraversal(root) {
  if (root == null) {
    return [];
  }
  var res = [];
  var dfs = (root) => {
    if (root == null) {
      return;
    }
    res.push(root.val);
    dfs(root.left)
    dfs(root.right);
  }
  dfs(root);
  return res;
}

 // 中序遍历
function main(root) {
  var res = [];
  var dfs = (root) => {
    if (root == null) {
      return;
    }
    dfs(root.left)
    res.push(root.val)
    dfs(root.right);
  }
  dfs(root);
  return res;
}

// 后序遍历: 左右中
function postorderTraversal(root) {
  var res = [];
  var dfs = (root) => {
    if (root == null) {
      return;
    }
    dfs(root.left);
    dfs(root.right);
    res.push(root.val)
  }
  dfs(root);
  return res;
}
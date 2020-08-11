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
function preorderTraversal(root, arr = []) {
  if (!root || !root.val) return [];
  arr.push(root.val);
  if (root.left && root.left.val) {
    preorderTraversal(root.left, arr);
  }
  if (root.right && root.right.val) {
    preorderTraversal(root.right, arr);
  }
  return arr;
}

 // 中序遍历
function main(root, arr) {
  arr = arr || [];
  if (!root || !root.val) {
    return [];
  }
  if (root.left) {
    main(root.left, arr);
  }
  arr.push(root.val)
  if (root.right) {
    main(root.right, arr);
  }
  return arr;
}

// 后序遍历: 左右中
function postorderTraversal(root, arr = []) {
  if (!root || !root.val) {
    return [];
  }
  if (root.left && root.left.val) {
    postorderTraversal(root.left, arr);
  }
  if (root.right && root.right.val) {
    postorderTraversal(root.right, arr);
  }
  arr.push(root.val);
  return arr;
}
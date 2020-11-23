/**
 * 
 * 翻转一棵二叉树。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 思考递归和变换的顺序，这个题目可以先递归也可以先交换
var invertTree = function(root) {
    if (!root) {
        return null;
    }
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};
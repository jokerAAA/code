/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @description 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) {
    return [];
  }
  let res = [];
  // res作为递归层层传递
  dfs(root, 0, res);
  return res;
};

const dfs = (root, level, res) => {
  // 当前节点不存在时直接返回即可
  if (!root) {
    return;
  }
  // 这里比较取巧，因为结果是期望二维数组返回结果，这里直接用level来表示数组index，可以起到map中key的作用
  // 如果未赋值，则初始化未数组，已经赋值时表示统一级别在之前遍历时已经初始化过了，只要继续push即可
  if (!res[level]) {
    res[level] = [];
  }
  res[level].push(root.val);
  level++;
  dfs(root.left, level, res);
  dfs(root.right, level, res);
}
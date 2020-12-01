
/**
 * 
 * 根据一棵树的前序遍历与中序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 在前序遍历 preorder = [3,9,20,15,7],中序遍历 inorder = [9,3,15,20,7]这个例子用
// 1. 前序遍历的首节点就是树的根节点，而中序遍历的根节点有个特征：根节点两侧分别是左子树和右子树
// 2. 根据根节点的值可以在中序遍历中找到对应的index，中序遍历有个特征，根节点左侧都是左子树的值，根节点右侧都是右节点的值，所以我们可以拿到中序遍历中中的左子树和右子树
// 3. 对前序遍历来说，顺序是根节点、左子树、右子树，通过第二步我们其实是可以拿到左右子树的长度，所以我们进行截取就可以拿到在前序遍历中的左右子树
// 4. 通过23我们分别拿到左右子树在前序、中序遍历的值，所以我们做递归即可。
var buildTree = function(preorder, inorder) {
    if (!preorder.length) {``
        return null
    }
    const root = preorder[0];
    const index = inorder.findIndex(v => v === root);
    const node = new TreeNode(root);
    node.left  = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index)); 
    node.right  = buildTree(preorder.slice(index+1), inorder.slice(index + 1)); 
    return node;
};
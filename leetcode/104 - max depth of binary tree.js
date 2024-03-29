/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    
    if(!root){ // base case
        return 0;
    } else { // n case
        const leftDepth = maxDepth(root.left);
        const rightDepth = maxDepth(root.right);
        
        return 1 + (leftDepth > rightDepth ? leftDepth : rightDepth);
    }
    
};
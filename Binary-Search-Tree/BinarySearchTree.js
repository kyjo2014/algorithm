/**
 * 二叉查找树查找
 * 
 * @param {any} node 
 * @param {any} dest 
 * @returns 
 */
function binarySearchTree(node, dest) {
    if (node == null) {
        return false
    }  
    if (node.val < dest) {
      return  binarySearchTree(node.left,dest)
    }
    if (node.val > dest) {
       return binarySearchTree(node.right,dest)
    }
    if (node.val == dest) {
        return true
    }
    
}
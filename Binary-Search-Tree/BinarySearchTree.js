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
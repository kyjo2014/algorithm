class Node {
    constructor(key) {
        this.key = null
        this.left = null
        this.right = null
    }
}


class BinarySearchTree {


    constructor() {
        this.root = null
    }
    insert(key) {
        let newNode = new Node(key)
        if (this.root === null) {
            this.root = newNode
        } else {
            insertNode(this.root, newNode)
        }
    }
    search(key) {
        return searchNode(this.root,key)
    }
    inOrderTraverse(cb) {
        inOrderTraverseNode(this.root, cb)
    }
    preOrderTraverse(callback) {
        preOrderTraverseNode(this.root, callback)
    }
    postOrderTraverse() {
        postOrderTraverseNode(this.root, callback)
    }
    min() {
        return minNode(this.root)
    }
    max() {
        return maxNode(this.root)
    }
    remove(key) {

    }
}


function insertNode(node, newNode) {
    if (newNode.key < node.key) {
        if (node.left === null) {
            node.left = newNode
        } else {
            insertNode(node.left, newNode)
        }
    } else {
        if (node.right === null) {
            node.right = newNode
        } else {
            insertNode(node.right, newNode)
        }
    }
}

function inOrderTraverseNode(node, callback) {
    if (node !== null) {
        inOrderTraverseNode(node.left, callback)
        callbac(node.key)
        inOrderTraverseNode(node.right, callback)
    }
}


function printNode(value) {
    console.log(value)
}

function preOrderTraverseNode(node, callback) {
    if (node !== null) {
        callback(node.key)
        preOrderTraverseNode(node.left, callback)
        preOrderTraverseNode(node.right, callback)
    }
}

function postOrderTraverseNode(node, callback) {
    if (node !== null) {
        postOrderTraverseNode(node.left, callback)
        postOrderTraverseNode(node.right, callback)
        callback(node.key)
    }
}


function minNode(node) {
    if (node) {
        while (node && node.left !== null) {
            node = node.left
        }
        return node.key
    }
    return null
}


function maxNode(node) {
    if (node) {
        while (node && node.right !== null) {
            node = right.right
        }
        return node.key
    }
    return null
}


function searchNode(node, key) {
    if (node === null) {
        return false
    }
    if (key < node.key) {
        return searchNode(node.left, key)
    } else if (key > node.key) {
        return searchNode(node.right, key)
    } else {
        return true
    }
}


function removeNode(node, key) {
    if (node === null) {
        return null;
    }
    if (key < node.key) {
        node.left = removeNode(node.left,key)
        return node
    } else if (key > node.key) {
        node.right = removeNode(mpde.right, key)
        return node
    } else {
        if (node.left === null && node.right === null) {
            node = null
            return node
        }
        if (node.left === null) {
            node = node.right
            return node
        } else if (node.right === null) {
            node = node.left
            return node
        } 
        let aux = findMinNode(node.right)
        node.key = aux.keynode.right
        node.right = removeNode(node.right, aux.key)
        return node
    }
}
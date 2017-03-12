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
            root = newNode
        } else {
            insertNode(root, newNode)
        }
    }
    search(key) {

    }
    inOrderTraverse(cb) {
        inOrderTraverseNode(this.root, cb)
    }
    preOrderTraverse(callback) {
        preOrderTraverseNode(root, callback)
    }
    postOrderTraverse() {
        postOrderTraverseNode(root,callback)
    }
    min() {

    }
    max() {

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
        preOrderTraverseNode(node.left,callback)
        preOrderTraverseNode(node.right,callback)
    }
}

function postOrderTraverseNode(node, callback) {
    if (node !== null) {
        postOrderTraverseNode(node.left,callback)
        postOrderTraverseNode(node.right,callback)
        callback(node.key)
    }
}
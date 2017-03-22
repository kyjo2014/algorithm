

const red = true
const black = false


class Node {
    constructor(key, value, number, color) {
        this.key = key // 键值
        this.value = value // 相关联的值
        this.number = number //这棵子树中的节点总数
        this.color = color // 由其父节点指向它的链接的颜色
        this.left = this.right = null //空节点
    }

}

class RedBlackBinaryTree {
    constructor() {
        this.rootNode = null
    }
    /*插入算法。分三种情况
     注意：插入的节点统一为红色，且第一次查找位置的时候是利用二叉排序树的插入方式进行插入
      再进行规整
    * 1.往一个2-node节点底部插入新的节点
        （1）如果新插入的节点在父节点的右子节点，则需要进行左旋操作
    * 2.往一个3-node节点底部插入新的节点
        （1）如果需要对4-node节点进行旋转操作
        （2）如果需要，调用FlipColor方法将红色节点提升
        （3）如果需要，左旋操作使红色节点左倾。
        （4）在有些情况下，需要递归调用Case1 Case2，来进行递归操作。
    * 3.插入节点作为根
        不用做任何操作，根节点一定是红色
    */
    insert(parent = this.rootNode, key, value) {
        if (this.rootNode == null) {
            this.rootNode = new Node(key, value, 1, red)
        }
        if (key < parent.key) {
            parent.left = this.insert(parent.left, key, value);
        } else if (key > parent.key) {
            parent.right = this.insert(parent.right, key, value);
        } else {
            parent.value = value
        }
        //平衡化
        if (IsRed(parent.right) && !IsRed(parent.left)) parent = rotateLeft(parent);
        if (IsRed(parent.right) && IsRed(parent.left.left)) parent = rotateRight(parent);
        if (IsRed(parent.left) && IsRed(parent.right)) parent = flipColors(parent);

        parent.number = size(parent.left) + size(parent.light) + 1;
        return parent;
    }
}

/**
 * 
 * 判断节点的颜色
 * @param {any} node 
 * @returns 
 */
function IsRed(node) {
    if (node == null) {
        return false
    }
    return node.color == red
}


function rotateLeft(node) {
    var r = node.right
    node.right = r.left
    r.left = node
    r.color = node.color
    node.color = red
    r.number = node.number
    node.number = 1 + size(node.left) + size(node.right)
    return x
}


function rotateRight(node) {
    var l = node.left
    node.left = l.right
    l.right = node
    l.color = node.color
    node.color = red
    l.number = node.number
    node.number = 1 + size(node.left) + size(node.right)
    return l
}


function flipColors(h) {
    h.color = red
    h.left.color = black
    h.right.color = black
    return h
}


function size(node) {
    if (node == null) return 0;
    return node.Number;
}

//网上的版本，源自http://www.108js.com/article/article5/50127.html?id=2715
function RedBlackTree() {//这是红黑树代码，其它代码请下载。
    var Colors = {
        RED: 0,
        BLACK: 1
    };
    var Node = function (key, color) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.color = color;
        this.flipColor = function(){
            if (this.color === Colors.RED) {
                this.color = Colors.BLACK;
            } else {
                this.color = Colors.RED;
            }
        };
    };
    var root = null;
    this.getRoot = function () {
        return root;
    };
    var isRed = function(node){
        if (!node){
            return false;
        }
        return node.color === Colors.RED;
    };
    var flipColors = function(node){
        node.left.flipColor();
        node.right.flipColor();
    };
    var rotateLeft = function(node){
        var temp = node.right;
        if (temp !== null) {
            node.right = temp.left;
            temp.left = node;
            temp.color = node.color;
            node.color = Colors.RED;
        }
        return temp;
    };
    var rotateRight = function (node) {
        var temp = node.left;
        if (temp !== null) {
            node.left = temp.right;
            temp.right = node;
            temp.color = node.color;
            node.color = Colors.RED;
        }
        return temp;
    };
    var insertNode = function(node, element) {
        //插入的节点都是红色
        if (node === null) {
            return new Node(element, Colors.RED);
        }
        var newRoot = node;

        //按照 二叉查找树树的方式去查找插入点
        if (element < node.key) {
            node.left = insertNode(node.left, element);
        } else if (element > node.key) {
            node.right = insertNode(node.right, element);
        } else {
            node.key = element;
        }
        //插入后判断父节点是否要旋转
        if (isRed(node.right) && !isRed(node.left)) {
            newRoot = rotateLeft(node);
        }
        if (isRed(node.left) && isRed(node.left.left)) {
            newRoot = rotateRight(node);
        }
        if (isRed(node.left) && isRed(node.right)) {
            flipColors(node);
        }
        return newRoot;
    };
    this.insert = function(element) {
        root = insertNode(root, element);
        root.color = Colors.BLACK;
    };
}
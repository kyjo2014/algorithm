var NodeColor = {
    Black: "black",
    Red: "red"
};

var RBNode = function (_date, _paret, _color) {
    this.Data = _date;
    this.Parent = _paret;
    this.Color = _color;
    this.LeftNode = null;
    this.RightNode = null;
}

var RedBlackBinaryTree = function () {
        this.RootNode = null; //根节点

        this.Insert = function (insertValue) {
            if (this.RootNode == null) {
                this.RootNode = new RBNode(insertValue, null, NodeColor.Black);
            } else {
                var newNode = insert.call(this, insertValue);
                insertFixUp.call(this, newNode);
            }
        }

        function insert(key) {
            ClearStepView(); //清空分解步骤
            var node = this.RootNode;

            var newNode = new RBNode(key, null, NodeColor.Red);
            while (true) {
                if (key > node.Data) {
                    if (node.RightNode == null) {
                        newNode.Parent = node;
                        node.RightNode = newNode;
                        break;
                    }
                    node = node.RightNode;
                } else if (key < node.Data) {
                    if (node.LeftNode == null) {
                        newNode.Parent = node;
                        node.LeftNode = newNode;
                        break;
                    }
                    node = node.LeftNode;
                } else {
                    break;
                }
            }
            return newNode;
        }

        function insertFixUp(node) {
            var parentNode = node.Parent;
            if (parentNode != null && NodeColor.Red == parentNode.Color) {
                var gprentNode = parentNode.Parent;
                if (parentNode == gprentNode.LeftNode) {
                    var uncleNode = gprentNode.RightNode;
                    if (uncleNode != null && NodeColor.Red == uncleNode.Color) {
                        CreateStepView(this.RootNode, "insertCase1", node.Data); //记录分解步骤
                        parentNode.Color = NodeColor.Black;
                        uncleNode.Color = NodeColor.Black;
                        gprentNode.Color = NodeColor.Red;
                        CreateStepView(this.RootNode, "insertSolution1"); //记录分解步骤
                        insertFixUp.call(this, gprentNode);
                    } else {
                        if (parentNode.RightNode == node) {
                            CreateStepView(this.RootNode, "insertCase2", node.Data); //记录分解步骤
                            leftRotation.call(this, parentNode);
                            CreateStepView(this.RootNode, "insertSolution2"); //记录分解步骤
                            insertFixUp.call(this, parentNode);
                        } else if (parentNode.LeftNode == node) {
                            CreateStepView(this.RootNode, "insertCase3", node.Data); //记录分解步骤
                            parentNode.Color = NodeColor.Black;
                            gprentNode.Color = NodeColor.Red;
                            rightRotation.call(this, gprentNode);
                            CreateStepView(this.RootNode, "insertSolution3"); //记录分解步骤
                        }
                    }
                } else {
                    var uncleNode = gprentNode.LeftNode;
                    if (uncleNode != null && NodeColor.Red == uncleNode.Color) {
                        CreateStepView(this.RootNode, "insertCase1", node.Data); //记录分解步骤
                        parentNode.Color = NodeColor.Black;
                        uncleNode.Color = NodeColor.Black;
                        gprentNode.Color = NodeColor.Red;
                        CreateStepView(this.RootNode, "insertSolution1"); //记录分解步骤
                        insertFixUp.call(this, gprentNode);
                    } else {
                        if (parentNode.LeftNode == node) {
                            CreateStepView(this.RootNode, "insertCase4", node.Data); //记录分解步骤
                            rightRotation.call(this, parentNode);
                            CreateStepView(this.RootNode, "insertSolution4"); //记录分解步骤
                            insertFixUp.call(this, parentNode);
                        } else if (parentNode.RightNode == node) {
                            CreateStepView(this.RootNode, "insertCase5", node.Data); //记录分解步骤
                            parentNode.Color = NodeColor.Black;
                            gprentNode.Color = NodeColor.Red;
                            leftRotation.call(this, gprentNode);
                            CreateStepView(this.RootNode, "insertSolution5"); //记录分解步骤
                        }
                    }
                }
            }
            this.RootNode.Color = NodeColor.Black;
        }

        function leftRotation(node) {
            var temp = node.RightNode;

            node.RightNode = temp.LeftNode;
            if (temp.LeftNode != null) {
                temp.LeftNode.Parent = node;
            }

            temp.Parent = node.Parent;

            if (node.Parent == null) {
                this.RootNode = temp;
            } else {
                if (node.Parent.LeftNode == node) {
                    node.Parent.LeftNode = temp;
                } else {
                    node.Parent.RightNode = temp;
                }
            }
            temp.LeftNode = node;
            node.Parent = temp;
        }

        function rightRotation(node) {
            var temp = node.LeftNode;

            node.LeftNode = temp.RightNode;
            if (temp.RightNode != null) {
                temp.RightNode.Parent = node;
            }

            temp.Parent = node.Parent;

            if (node.Parent == null) {
                this.RootNode = temp;
            } else {
                if (node == node.Parent.RightNode) {
                    node.Parent.RightNode = temp;
                } else {
                    node.Parent.LeftNode = temp;
                }
            }
            temp.RightNode = node;
            node.Parent = temp;
        }

        this.Remove = function (key) {
            var node = search.call(this, this.RootNode, key);
            if (node == null) {
                return;
            } else {
                remove.call(this, node);
            }
        }

        function remove(node) {
            ClearStepView(); //清空分解步骤

            var child, parent, nodeColor;
            if (node.LeftNode != null && node.RightNode != null) {
                CreateStepView(this.RootNode, "deleteCase8", node.Data); //记录分解步骤
                var tempNode = findMin(node.RightNode);
                if (node.Parent == null) {
                    this.RootNode = tempNode;
                } else {
                    if (node.Parent.LeftNode == node) {
                        node.Parent.LeftNode = tempNode;
                    } else {
                        node.Parent.RightNode = tempNode;
                    }
                }

                child = tempNode.RightNode;
                parent = tempNode.Parent;
                nodeColor = tempNode.Color;

                if (parent.Data == node.Data) {
                    parent = tempNode;
                } else {
                    if (child != null) {
                        child.Parent = parent;
                    }
                    parent.LeftNode = child;

                    tempNode.RightNode = node.RightNode;
                    node.RightNode.Parent = tempNode;
                }

                tempNode.Parent = node.Parent;
                tempNode.Color = node.Color;
                tempNode.LeftNode = node.LeftNode
                node.LeftNode.Parent = tempNode;

                CreateStepView(this.RootNode, "deleteSolution8"); //记录分解步骤

                if (nodeColor == NodeColor.Black) {
                    removeFixUp.call(this, child, parent);
                }
            } else {
                CreateStepView(this.RootNode, "deleteCase9", node.Data); //记录分解步骤
                if (node.LeftNode != null) {
                    child = node.LeftNode;
                } else {
                    child = node.RightNode;
                }

                parent = node.Parent;
                nodeColor = node.Color;

                if (child != null) {
                    child.Parent = parent;
                }

                if (parent != null) {
                    if (parent.LeftNode != null && parent.LeftNode.Data == node.Data) {
                        parent.LeftNode = child;
                    } else {
                        parent.RightNode = child;
                    }
                } else {
                    this.RootNode = child;
                }

                CreateStepView(this.RootNode, "deleteSolution9"); //记录分解步骤

                if (nodeColor == NodeColor.Black) {
                    removeFixUp.call(this, child, parent)
                }
            }
            node = null;
        }

        function removeFixUp(node, parentNode) {

            var otherNode;
            while ((node == null || node.Color == NodeColor.Black) && (node != this.RootNode)) {
                if (parentNode.LeftNode == node) {
                    otherNode = parentNode.RightNode;
                    if (otherNode.Color == NodeColor.Red) {
                        CreateStepView(this.RootNode, "deleteCase1"); //记录分解步骤
                        otherNode.Color = NodeColor.Black;
                        parentNode.Color = NodeColor.Red;
                        leftRotation.call(this, parentNode);
                        otherNode = parentNode.RightNode;
                        CreateStepView(this.RootNode, "deleteSolution1"); //记录分解步骤
                    }

                    if ((otherNode.LeftNode == null || otherNode.LeftNode.Color == NodeColor.Black) &&
                        (otherNode.RightNode == null || otherNode.RightNode.Color == NodeColor.Black)) {
                        CreateStepView(this.RootNode, "deleteCase3"); //记录分解步骤
                        otherNode.Color = NodeColor.Red;
                        node = parentNode;
                        parentNode = node.Parent;
                        CreateStepView(this.RootNode, "deleteSolution3"); //记录分解步骤
                    } else {
                        if (otherNode.RightNode == null || otherNode.RightNode.Color == NodeColor.Black) {
                            CreateStepView(this.RootNode, "deleteCase4"); //记录分解步骤
                            otherNode.LeftNode.Color == NodeColor.Black;
                            otherNode.Color = NodeColor.Red;
                            rightRotation.call(this, otherNode);
                            otherNode = parentNode.RightNode;
                            CreateStepView(this.RootNode, "deleteSolution4"); //记录分解步骤
                        }

                        CreateStepView(this.RootNode, "deleteCase6"); //记录分解步骤
                        otherNode.Color = parentNode.Color;
                        parentNode.Color = NodeColor.Black;
                        otherNode.RightNode.Color = NodeColor.Black;
                        leftRotation.call(this, parentNode);
                        node = this.RootNode;
                        CreateStepView(this.RootNode, "deleteSolution6"); //记录分解步骤
                        break;
                    }
                } else {
                    otherNode = parentNode.LeftNode;
                    if (otherNode.Color == NodeColor.Red) {
                        CreateStepView(this.RootNode, "deleteCase2"); //记录分解步骤
                        otherNode.Color = NodeColor.Black;
                        parentNode.Color = NodeColor.Red;
                        rightRotation.call(this, parentNode);
                        otherNode = parentNode.LeftNode;
                        CreateStepView(this.RootNode, "deleteSolution2"); //记录分解步骤
                    }

                    if ((otherNode.LeftNode == null || otherNode.LeftNode.Color == NodeColor.Black) &&
                        (otherNode.RightNode == null || otherNode.RightNode.Color == NodeColor.Black)) {
                        CreateStepView(this.RootNode, "deleteCase3"); //记录分解步骤
                        otherNode.Color = NodeColor.Red;
                        node = parentNode;
                        parentNode = node.parent;
                        CreateStepView(this.RootNode, "deleteSolution3"); //记录分解步骤
                    } else {
                        if (otherNode.LeftNode == null || otherNode.LeftNode.Color == NodeColor.Black) {
                            CreateStepView(this.RootNode, "deleteCase5"); //记录分解步骤
                            otherNode.RightNode.Color = NodeColor.Black;
                            otherNode.Color = NodeColor.Red;
                            leftRotation.call(this, otherNode);
                            otherNode = parentNode.LeftNode;
                            CreateStepView(this.RootNode, "deleteSolution5"); //记录分解步骤
                        }
                        CreateStepView(this.RootNode, "deleteCase7"); //记录分解步骤
                        otherNode.Color = parentNode.Color;
                        parentNode.Color = NodeColor.Black;
                        otherNode.LeftNode.Color = NodeColor.Black;
                        rightRotation.call(this, parentNode);
                        node = this.RootNode;
                        CreateStepView(this.RootNode, "deleteSolution7"); //记录分解步骤
                        break;
                    }
                }
            }
            if (node != null) {
                node.Color = NodeColor.Black;
            }
        }

        this.Search = function (key) {
            return search.call(this, this.RootNode, key);
        }

        function search(node, key) {
            if (node == null) {
                return null;
            }

            if (node.Data > key) {
                return search(node.LeftNode, key);
            } else if (node.Data < key) {
                return search(node.RightNode, key);
            } else {
                return node;
            }
        }

        this.FindMin = function () {
            return findMin(this.RootNode);
        }

        function findMin(node) {
            if (node.LeftNode == null) {
                return node;
            }
            return findMin(node.LeftNode);
        }

        this.FindMax = function () {
            return findMax(this.RootNode)
        }

        function findMax(node) {
            if (node.RightNode == null) {
                return node;
            }
            return findMax(node.RightNode);
        }


        this.SearchRange = function (minKey, maxKey) {
            return searchRange(minKey, maxKey, this.RootNode, []);
        }

        function searchRange(minKey, maxKey, node, nodeList) {
            if (node == null) {
                return nodeList;
            }

            if (node.Data > minKey) {
                searchRange(minKey, maxKey, node.LeftNode, nodeList);
            }

            if (node.Data >= minKey && node.Data < maxKey) {
                nodeList.push(node.Data);
            }

            if (node.Data < maxKey) {
                searchRange(minKey, maxKey, node.RightNode, nodeList);
            }

            return nodeList;
        }

        this.LevelOrder = function (action) {
            levelOrder(this.RootNode, action);
        }

        function levelOrder(node, action) {
            var stack = [];
            stack.push(node);

            while (stack.length > 0) {
                var temp = stack.pop();

                action(temp);

                if (temp.LeftNode != null) {
                    stack.push(temp.LeftNode);
                }

                if (temp.RightNode != null) {
                    stack.push(temp.RightNode);
                }
            }
        }


        this.PreOrder = function (action) {
            treeOrder(this.RootNode, action, null, null);
        }

        this.InOrder = function (action) {
            treeOrder(this.RootNode, null, action, null);
        }

        this.PostOrder = function (action) {
            treeOrder(this.RootNode, null, null, action);
        }

        function treeOrder(node, preOrderAction, inOrderAction, postOrderAction) {
            if (preOrderAction) {
                preOrderAction(node);
            }

            if (node.LeftNode != null) {
                treeOrder(node.LeftNode, preOrderAction, inOrderAction, postOrderAction);
            }

            if (inOrderAction) {
                inOrderAction(node);
            }

            if (node.RightNode != null) {
                treeOrder(node.RightNode, preOrderAction, inOrderAction, postOrderAction);
            }

            if (postOrderAction) {
                postOrderAction(node);
            }
        }
    } <
  
var tree = new RedBlackBinaryTree();

function AddOneNumber() {
    var numbertext = document.getElementById("numbertext").value;

    var oneNums = numbertext.match(/[1-9][0-9]{0,2}\,?/);
    document.getElementById("numbertext").value = numbertext.replace(/[1-9][0-9]{0,2}\,?/, "");

    var num = (oneNums + "").match(/[1-9][0-9]{0,2}/);

    if (!!num) {
        AddNumber(parseInt(num));
    }
}

function AddRandom() {
    AddNumber(Math.floor(Math.random() * (1000)));
}

function AddAllNumber() {
    while (true) {
        AddOneNumber();
        var numbertext = document.getElementById("numbertext").value;
        if (!/[1-9][0-9]{0,2}/.test(numbertext)) {
            break;
        }
    }
}

function AddNumber(number) {
    tree.Insert(number);
    RenewView(tree);
}

function DeleteNumber() {
    var deleteNumberText = document.getElementById("deleteNumberText").value;
    if (!deleteNumberText.match(/^[1-9][0-9]{0,2}$/)) {
        alert("请正确输入1-999的整数");
        return false;
    }
    var number = parseInt(deleteNumberText);
    var isExist = tree.Search(number);
    if (!isExist) {
        alert("不存在此节点");
        return false;
    }
    tree.Remove(number);
    document.getElementById("deleteNumberText").value = '';
    RenewView(tree);
}

function RenewView(_tree) {
    var currentView = document.getElementById("currentView");
    currentView.innerHTML = '';
    CreateTreeView(_tree.RootNode, currentView);
}


function CreateTreeView(rootNode, hostDocument) {
    var size = SetCanvasWidthHeight(rootNode);

    var canvas = document.createElement("canvas");
    canvas.style.backgroundColor = "antiquewhite";
    canvas.style.display = "block";
    canvas.height = size.height;
    canvas.width = size.width;

    var context = canvas.getContext("2d");

    hostDocument.appendChild(canvas);
    SetPoint(rootNode);
    PreOrder(rootNode, SetPreOrder, context, canvas.width);
}


function PreOrder(node, action, context, canvasWidth) {
    action(node, context, canvasWidth);

    if (node.LeftNode != null) {
        PreOrder(node.LeftNode, action, context, canvasWidth);
    }

    if (node.RightNode != null) {
        PreOrder(node.RightNode, action, context, canvasWidth);
    }
}


function SetCanvasWidthHeight(rootNode) {
    var level = Level(rootNode);
    return {
        height: height * level + tops + foot,
        width: Math.pow(2, level + 1) * width + spacing * 2
    };
}

function SetPreOrder(node, context, canvasWidth) {
    var container = drawArc(
        context,
        node.Data,
        canvasWidth / 2 + width * node.nodePoint,
        (node.nodeLevel * height + parseInt(tops)),
        node.Color);

    if (node.Parent != null) {
        var line = linkNode(
            context,
            (canvasWidth / 2 + width * node.Parent.nodePoint),
            (node.Parent.nodeLevel * height + parseInt(tops)),
            (node.Data, canvasWidth / 2 + width * node.nodePoint),
            (node.nodeLevel * height + parseInt(tops)));
    }
}

//生产节点
function drawArc(context, number, x, y, color) {
    //圆
    context.beginPath();
    context.fillStyle = color;
    context.arc(x, y, 15, (Math.PI / 180) * 0, (Math.PI / 180) * 360, false);
    context.fill();
    context.closePath();

    //数字
    var textX = x;
    var textY = y + 5;
    if (number < 10) {
        textX -= 5;
    } else if (number > 9 && number < 100) {
        textX -= 8;
    } else {
        textX -= 12;
    }

    context.fillStyle = "white";
    context.font = "bold 15px Arial";
    context.fillText(number + "", textX, textY);
}

//链接节点
function linkNode(context, fatherNodeX, fatherNodeY, childrenNodeX, childrenNodeY) {
    drawLine(context, fatherNodeX, fatherNodeY + 15, childrenNodeX, childrenNodeY - 15);
}

//生产线
function drawLine(context, x, y, toX, toY) {
    context.moveTo(x, y);
    context.lineTo(x, y);
    context.lineTo(toX, toY);
    context.stroke();
}



var maxLevel;
var level;

function Level(rootNode) {
    maxLevel = 0;
    level = 0;
    return levels(rootNode);
}

function levels(node) {
    if (node.LeftNode != null) {
        level++;
        levels(node.LeftNode);
    }
    maxLevel = Math.max(maxLevel, level);

    if (node.RightNode != null) {
        level++;
        levels(node.RightNode);
    }
    level--;
    return maxLevel;
}

function SetPoint(rootNode) {
    var thisMaxLevel = Level(rootNode);
    var childQuanty = Math.pow(2, thisMaxLevel);

    rootNode.nodeLevel = 0;
    rootNode.nodePoint = 0;

    if (rootNode.LeftNode != null) {
        setPointsLeft(rootNode.LeftNode, -1 * childQuanty / 2, 0, thisMaxLevel - 1);
    }

    if (rootNode.RightNode != null) {
        setPointsRight(rootNode.RightNode, childQuanty / 2, 0, thisMaxLevel - 1);
    }
}

function setPointsLeft(node, point, levels, thisMaxLevel) {
    ++levels;
    node.nodeLevel = levels;
    node.nodePoint = point;

    if (node.LeftNode != null) {
        setPointsLeft(node.LeftNode, point - Math.pow(2, thisMaxLevel - levels), levels, thisMaxLevel);
    }

    if (node.RightNode != null) {
        setPointsLeft(node.RightNode, point + Math.pow(2, thisMaxLevel - levels), levels, thisMaxLevel);
    }
}

function setPointsRight(node, point, levels, thisMaxLevel) {
    ++levels;
    node.nodeLevel = levels;
    node.nodePoint = point;

    if (node.LeftNode != null) {
        setPointsRight(node.LeftNode, point - Math.pow(2, thisMaxLevel - levels), levels, thisMaxLevel);
    }

    if (node.RightNode != null) {
        setPointsRight(node.RightNode, point + Math.pow(2, thisMaxLevel - levels), levels, thisMaxLevel);
    }
}


var stepRemark = {
    "insertCase1": {
        "title": "插入节点情况1",
        "remark": [
            "当前节点的父节点是红色，且当前节点的祖父节点的另一个子节点（叔叔节点）也是红色"
        ]
    },
    "insertSolution1": {
        "title": "插入节点情况1的解决方案",
        "remark": [
            "(01) 将“父节点”设为黑色",
            "(02) 将“叔叔节点”设为黑色",
            "(03) 将“祖父节点”设为“红色",
            "(04) 将“祖父节点”设为“当前节点”(红色节点)；即，之后继续对“当前节点”进行操作"
        ]
    },
    "insertCase2": {
        "title": "插入节点情况2",
        "remark": [
            "当前节点的父节点是红色，叔叔节点是黑色，且当前节点是其父节点的右孩子"
        ]
    },
    "insertSolution2": {
        "title": "插入节点情况2的解决方案",
        "remark": [
            "(01) 将“父节点”作为“新的当前节点”",
            "(02) 以“新的当前节点”为支点进行左旋",
        ]
    },
    "insertCase3": {
        "title": "插入节点情况3",
        "remark": [
            "当前节点的父节点是红色，叔叔节点是黑色，且当前节点是其父节点的左孩子"
        ]
    },
    "insertSolution3": {
        "title": "插入节点情况3的解决方案",
        "remark": [
            "(01) 将“父节点”设为“黑色”",
            "(02) 将“祖父节点”设为“红色”",
            "(03) 以“祖父节点”为支点进行右旋"
        ]
    },
    "insertCase4": {
        "title": "插入节点情况4",
        "remark": [
            "当前节点的父节点是红色，叔叔节点是黑色，且当前节点是其父节点的左孩子"
        ]
    },
    "insertSolution4": {
        "title": "插入节点情况4的解决方案",
        "remark": [
            "(01) 将“父节点”作为“新的当前节点”",
            "(02) 以“新的当前节点”为支点进行右旋",
        ]
    },
    "insertCase5": {
        "title": "插入节点情况5",
        "remark": [
            "当前节点的父节点是红色，叔叔节点是黑色，且当前节点是其父节点的右孩子"
        ]
    },
    "insertSolution5": {
        "title": "插入节点情况5的解决方案",
        "remark": [
            "(01) 将“父节点”设为“黑色”",
            "(02) 将“祖父节点”设为“红色”",
            "(03) 以“祖父节点”为支点进行左旋"
        ]
    },
    "deleteCase1": {
        "title": "删除节点情况1",
        "remark": [
            "被删节点是“黑+黑”节点，被删除的节点是左节点，被删节点的兄弟节点是红色。(此时被删节点的父节点和x的兄弟节点的子节点都是黑节点)。"
        ]
    },
    "deleteSolution1": {
        "title": "删除节点情况1解决方案",
        "remark": [
            "(01) 将x的兄弟节点设为“黑色”。",
            "(02) 将x的父节点设为“红色”。",
            "(03) 对x的父节点进行左旋。",
            "(04) 左旋后，重新设置x的兄弟节点。"
        ]
    },
    "deleteCase2": {
        "title": "删除节点情况2",
        "remark": [
            "被删节点是“黑+黑”节点，被删除的节点是右节点，被删节点的兄弟节点是红色。(此时被删节点的父节点和x的兄弟节点的子节点都是黑节点)。"
        ]
    },
    "deleteSolution2": {
        "title": "删除节点情况2解决方案",
        "remark": [
            "(01) 将被删节点的兄弟节点设为“黑色”。",
            "(02) 将被删节点的父节点设为“红色”。",
            "(03) 对被删节点的父节点进行右旋。",
            "(04) 右旋后，重新设置x的兄弟节点。"
        ]
    },
    "deleteCase3": {
        "title": "删除节点情况3",
        "remark": [
            "被删节点是“黑+黑”节点，被删节点的兄弟节点是黑色，被删节点的兄弟节点的两个孩子都是黑色。"
        ]
    },
    "deleteSolution3": {
        "title": "删除节点情况3解决方案",
        "remark": [
            "(01) 将被删节点的兄弟节点设为“红色”。",
            "(02) 设置“被删节点的父节点”为“新的被删节点节点”。"
        ]
    },
    "deleteCase4": {
        "title": "删除节点情况4",
        "remark": [
            "将被删节点是“黑+黑”节点，被删节点的兄弟节点是黑色；将被删节点的兄弟节点的左孩子是红色，右孩子是黑色的。"
        ]
    },
    "deleteSolution4": {
        "title": "删除节点情况4解决方案",
        "remark": [
            "(01) 将被删节点兄弟节点的左孩子设为“黑色”。",
            "(02) 将被删节点兄弟节点设为“红色”。",
            "(03) 对被删节点的兄弟节点进行右旋。",
            "(04) 右旋后，重新设置被删节点的兄弟节点。",
        ]
    },
    "deleteCase5": {
        "title": "删除节点情况5",
        "remark": [
            "被删节点是“黑+黑”节点，被删节点的兄弟节点是黑色；被删节点的兄弟节点的左孩子是黑色，右孩子是红色的。"
        ]
    },
    "deleteSolution5": {
        "title": "删除节点情况5解决方案",
        "remark": [
            "(01) 将被删节点兄弟节点的右孩子设为“黑色”。",
            "(02) 将被删节点兄弟节点设为“红色”。",
            "(03) 对被删节点的兄弟节点进行左旋。",
            "(04) 左旋后，重新设置被删节点的兄弟节点。",
        ]
    },
    "deleteCase6": {
        "title": "删除节点情况6",
        "remark": [
            "被删节点是“黑+黑”节点，被删节点的兄弟节点是黑色；被删节点的兄弟节点的右孩子是红色的，被删节点的兄弟节点的左孩子任意颜色。"
        ]
    },
    "deleteSolution6": {
        "title": "删除节点情况6解决方案",
        "remark": [
            "(01) 将被删节点父节点颜色 赋值给 被删节点的兄弟节点。",
            "(02) 将被删节点父节点设为“黑色”。",
            "(03) 将被删节点兄弟节点的右子节点设为“黑色”。",
            "(04) 对被删节点的父节点进行左旋。",
            "(05) 设置“被删节点”为“根节点”。"
        ]
    },
    "deleteCase7": {
        "title": "删除节点情况7",
        "remark": [
            "被删节点是“黑+黑”节点，被删节点的兄弟节点是黑色；被删节点的兄弟节点的左孩子是红色的，被删节点的兄弟节点的右孩子任意颜色。"
        ]
    },
    "deleteSolution7": {
        "title": "删除节点情况7解决方案",
        "remark": [
            "(01) 将被删节点父节点颜色 赋值给 被删节点的兄弟节点。",
            "(02) 将被删节点父节点设为“黑色”。",
            "(03) 将被删节点兄弟节点的左子节设为“黑色”。",
            "(04) 对被删节点的父节点进行右旋。",
            "(05) 设置“被删节点”为“根节点”。"
        ]
    },
    "deleteCase8": {
        "title": "删除节点情况8",
        "remark": [
            "被删节点有两个子节点"
        ]
    },
    "deleteSolution8": {
        "title": "删除节点情况8解决方案",
        "remark": [
            "(01) 将被删节点右节点的子孙节点中找出小的节点，替换被删节点。",
        ]
    },
    "deleteCase9": {
        "title": "删除节点情况9",
        "remark": [
            "被删节点只有一个子节点或无子节点"
        ]
    },
    "deleteSolution9": {
        "title": "删除节点情况9解决方案",
        "remark": [
            "(01) 将唯一的子节点替换被删节点。",
        ]
    }

};

function ClearStepView() {
    var stepView = document.getElementById("stepView");
    stepView.innerHTML = '';
}

function CreateStepView(_tree, step, currentNumber) {
    var fieldset = document.createElement("fieldset");
    var legend = document.createElement("legend");
    var ul = document.createElement("ul");
    var canvas = document.createElement("canvas");

    legend.innerHTML = stepRemark[step].title;

    if (!!currentNumber) {
        var li = document.createElement("li");
        li.innerHTML = "当前节点：" + currentNumber;
        ul.appendChild(li);
    }


    for (var i = 0; i < stepRemark[step].remark.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = stepRemark[step].remark[i];
        ul.appendChild(li);
    }

    fieldset.appendChild(legend);
    fieldset.appendChild(ul);
    fieldset.appendChild(canvas);

    var stepView = document.getElementById("stepView");
    stepView.appendChild(fieldset);

    CreateStepTreeView(_tree, canvas);
}

function CreateStepTreeView(rootNode, canvas) {
    var size = SetCanvasWidthHeight(rootNode);

    canvas.style.backgroundColor = "antiquewhite";
    canvas.style.display = "block";
    canvas.height = size.height;
    canvas.width = size.width;

    var context = canvas.getContext("2d");

    SetPoint(rootNode);
    PreOrder(rootNode, SetPreOrder, context, canvas.width);
}
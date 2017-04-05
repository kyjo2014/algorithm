function node(val, left, right) {
    this.val = val
    this.left = left || NULL
    this.right = right || NULL

}

//TODO: 修改参数列表
function Construct(preorder, inorder, length) {
    if (preorder == NULL || inorder == NULL || length <= 0) {
        return NULL
    }
    return ConstructCore(preorder, , inorder, )
}

function ConstructCore(preorder, startPreorder, endPreorder, inorder, startInorder, endInorder) {
    var rootValue = startPreorder[0]
    root = new node(rootValue, NULL, NULL)
    if (startPreorder == endPreorder) {
        if (startInorder == endInorder) {
            if (startInorder == endInorder && preorder[startPreorder] == preorder[startInorder]) {
                return root
            } else {
                throw new Error('invalid input')
            }
        }
        var rootInorder = startInorder
        while (rootInorder <= endInorder && inorder != rootValue) {
            ++rootInorder
        }
        if (rootInorder == endInorder && inorder[rootInorder] != rootValue) {
            throw new Error('invalid input')
        }
        var leftLength = rootInorder - startInorder
        var leftPreorder = startPreorder +leftLength
        if (leftLength > 0) {
            root.right =ConstructCore()
        }
        return root
    }

}
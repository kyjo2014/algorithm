function node(val,left,right) {
    this.val = val
    this.left = left || NULL
    this.right = right || NULL

}

//TODO: 修改参数列表
function Construct(preorder, inorder, length) {
    if (preorder == NULL || inorder == NULL || length <= 0) {
        return NULL
    }
    return ConstructCore(preorder,,inorder,)
}

function ConstructCore(preorder,startPreorder, endPreorder,startInorder,endInorder)
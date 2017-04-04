function node(key, next) {
    this.key = key
    this.next = next
}

function PrintListReversingly(pHead) {
    var pNode = pHead
    while (pNode != NULL) {
        nodes.push(pNode)
        pNode = pNode.next
    }
    while (!nodes.length != 0) {
        pNode = nodes.pop()
        console.log(pNode.key)
    }
}


function PrintListReversingly_Recursively(pHead) {
    if (pHead != NUll) {
        if (pHead.next != NULL) {
            PrintListReversingly_Recursively(pHead.next)
        }
        console.log(pHead.key)
    }
}
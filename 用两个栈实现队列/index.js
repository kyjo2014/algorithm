var stack1 = []
var stack2 = []
//之前那个是瞎写的



function push(node)
{
    // write code here
    if(stack2.length) {
        while(stack2.length) {
            stack1.push(stack2.pop())
        }
    }
    stack1.push(node)
}
function pop()
{
    // write code here
    while(stack1.length) {
        stack2.push(stack1.pop())
    }
    return stack2.pop()
}
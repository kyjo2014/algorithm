function Fibonacci(n)
{
    // write code here
    var clu = [1,1]
    if(n == 0)
        return 0
    while(--n) {
        var temp = clu[1]
        clu[1] = clu[0] + clu[1]
        clu[0] = temp
        
    }
    return clu[0]
    
}
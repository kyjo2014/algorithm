function minNumberInRotateArray(rotateArray)
{
    // write code here
    var left = 0
    var right = rotateArray.length - 1
    while(rotateArray[left]>=rotateArray[right]) {
        var mid = Math.floor((left+right)/2)
        if(right-left == 1) {
            return rotateArray[right]
        }
        if(rotateArray[left]<=rotateArray[mid]) {
            left = mid
        }else if(rotateArray[right]>=rotateArray[mid]) {
            right = mid
        } else if(rotateArray[mid] == rotateArray[right] && rotateArray[mid] == rotateArray[left]){
            for(var i = 0,min = rotateArray[0];i<rotateArray.length;i++) {
                if(min> rotateArray[i]){
                    min = rotateArray[i]
                }
            }
            return min
        }
        
    }
    return rotateArray[mid]
}
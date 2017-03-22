function MoreThanHalfNum(numbers, length) {
    var middle = length >> 1,
        start = 0,
        end = length - 1,
        index = partition(numbers, length, start, end)
    while (index != middle) {
        if (index > middle) {
            end = index - 1
            index = partition(numbers, length, start, end)
        } else {
            start = index + 1
            index = partition(numbers,length,start,end)
        } 
    }
    return retult = numbers[middle]
    

}
/**
 * 增加划分查找，
 * 利用快排的划分函数实现对数组的部分排序,利用中点位置确定的方法对整个数组进行划分
 * 剑指offer29题目
 * @param {any} numbers 
 * @param {any} length 
 * @returns 
 */
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
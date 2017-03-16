/**
 * 用递归的方式实现二分查找
 * 
 * @param {array} arr 
 * @param {int} dest 
 * @param {int} start 
 * @param {int} end 
 * @returns 
 */
function binarySearch(arr, dest, start, end) {
    var end = end || arr.length - 1,
        start = start || 0,
        middle = Math.floor((start + end) / 2);
    if (arr[middle] == dest) {
        return middle;
    }
    if (dest < arr[middle]) {
        return binarySearch(data, dest, 0, middle - 1);
    } else {
        return binarySearch(data, dest, middle + 1, end);
    }

    return false;
}

/**
 * 非递归的方式实现二分查找
 * 
 * @param {Array} arr 
 * @param {int} dest 
 * @returns 
 */
function binarySearchv2(arr, dest) {
    var l = 0,
        r = arr.length - 1
    middle = Math.floor((l + r) / 2)
    while (l <= r) {
        if (dest == arr[middle]) {
            return middle
        }
        if (dest > middle) {
            l = middle + 1 
        } else {
            r = middle - 1
        }
        middle = Math.floor((l + r) / 2)
    }
    return false

}
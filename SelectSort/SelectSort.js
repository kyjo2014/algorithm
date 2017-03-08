/**
 * 选择排序：从每次循环中获得数组中最小元素的下标，
 * 再交换未排序区的第一个元素和最小元素两个的位置
 * @param {any} arr 
 * @returns 
 */
function selectSort(arr) {
    let len = arr.length
    let minIndex, temp
    for (let i = 0; i < len - 1; i++) {
        minIndex = i
        for (let j = i + 1; j < len; j++) {
            if (arr[i] < arr[minIndex]) {
                minIndex = j
            }
        }
        temp = arr[j]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}
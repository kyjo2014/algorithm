/**
 * 快速排序，利用分治法，该版本是使用每个分组的最右
 * 元素作为哨兵
 * 
 * @param {Array} arr 
 * @param {int} left 
 * @param {int} right 
 * @returns 
 */
function quickSort(arr, left, right) {
    left = left || 0
    right = right || arr.length
    if (left < right) {
        let x = arr[right],
            i = left - 1,
            temp
        for (let j = left; j <= right; j++) {
            if (arr[j] <= x) {
                i++
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
        quickSort(arr, left, i - 1)
        quickSort(arr, i + 1, right)
        return arr
    }
}
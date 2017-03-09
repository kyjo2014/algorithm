/**
 * 希尔排序
 * 目前版本是按照数组长度对数组分成5组然后每组内分别进行插入排序
 * 然后减少成两组，最后减少至一组
 * @param {Array} arr 
 * @returns 
 */
function shellSort(arr) {
    let len = arr.length
    let temp
    let gap = 1
    while (gap < len / 5) {
        gap = gap * 5 + 1
    }
    for (gap; gap > 0; gap = Math.floor(gap / 5)) {
        for (let i = gap; i < len; i++) {
            temp = arr[j]
            for (let j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j]
            }

            arr[j + gap] = temp
        }
    }
    return arr
}
/**
 * 
 * 冒泡排序
 * 参考Damonare
 * @param {Array} arr 
 * @returns Array
 */
function bubbleSort(arr) {
    let len = arr.length
    let temp = null
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr

}

/**
 * 改进冒泡排序
 * 当检测到一次遍历时候没有发生交换
 * 说明数组已经有序
 * @param {Array} arr 
 */
function bubbleSortv2(arr) {
    let swapped = true
    let len = arr.length
    let temp = 0;
    for (let i = 0; i < len - 1; i++) {
        swapped = false //每次开始一次冒泡前都需要重置状态
        for (let j = 0; j < len - 1 - j; j++) {
            if (arr[j] < arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                swapped = true
            }
            if (!swapped) {
                break
            }
        }
        return arr
    }
}

module.exports = bubbleSort
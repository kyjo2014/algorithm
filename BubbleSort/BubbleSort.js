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


module.exports = bubbleSort
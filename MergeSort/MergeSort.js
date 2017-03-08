/**
 * 归并排序需要分成两个函数
 * 主函数负责拆分
 * @param {any} arr 
 */
function mergeSort(arr) {
    let len = arr.length
    let middle = Math.floor(len / 2)
    let left = arr.slice(0, middle)
    let right = arr.slice(middle)
    if (len < 2) {
        return arr
    }
    return mergeSort(mergeSort(left), mergeSort(right))


}

function merge(left, right) {
    let result = []
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.push())
        }
    }
    while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }
    return result
}
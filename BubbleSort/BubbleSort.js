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

/**
 * 冒泡排序优化v3
 * 发现冒泡排序中如果上一次遍历时候，在到达len-1-i之前就
 * 已经没有发生交换了，但循环依然继续。这里可以继续优化
 * @param {Array} arr 
 */
function bubbleSortv3(arr) {
    let len = arr.length; //初始时,最后位置保持不变
    let i = len - 1
    let swapped = true
    while (i > 0) {
        let lastswappedpos = 0; //每趟开始时,无记录交换
        for (let j = 0; j < i; j++) {
            swapped = false
            if (arr[j] > arr[j + 1]) {
                lastswappedpos = j; //记录交换的位置
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                swapped = true
            }
        }

        if (!swapped) {
            break
        }
        i = lastswappedpos; //为下一趟排序作准备
    }
    return arr
}


/**
 * 双向冒泡法
 * 在单次循环中同时进行从数组两头进行交换
 * @param {any} arr 
 */
function bubbleSortv4(arr) {
    var low = 0;
    var high = arr.length - 1; //设置变量的初始值
    var tmp, j;
    console.time('2.改进后冒泡排序耗时');
    while (low < high) {
        for (j = low; j < high; ++j) //正向冒泡,找到最大者
            if (arr[j] > arr[j + 1]) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
            --high; //修改high值, 前移一位
        for (j = high; j > low; --j) //反向冒泡,找到最小者
            if (arr[j] < arr[j - 1]) {
                tmp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = tmp;
            }
            ++low; //修改low值,后移一位
    }
}

module.exports = bubbleSort
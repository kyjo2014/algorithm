/**
 * 插入排序：类似扑克牌切牌方法，
 * 选取一张牌插到在前面已经排序的牌中正确位置
 * 
 * @param {Array} arr 
 * @returns 
 */
function insertionSort(arr) {
    let len = arr.length
    for (let i = 1; i < len; i++) {
        let key = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = key
    }
    return arr
}


/**
 * 插入排序v2，相比基本形态，发现循环中的key被比较
 * 了两次，而如果使用arr[0]来保存的话，既然最后往前遍历就能减少一次比较 
 * @param {Array} arr 
 * @returns 
 */
function insertionSortv2(arr) {
    let i, j;
    let len = arr.length
    for (i = 2; i < len; i++) {
        if (arr[i] < arr[i - 1]) {
            arr[0] = arr[i];
            j = i - 1;
            do {
                arr[j + 1] = arr[j];
                j--;
            } while (arr[0] < arr[j]);
            arr[j + 1] = arr[0];
        }
    }
    return arr
}
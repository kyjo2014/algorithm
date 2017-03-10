function heapSort(arr) {
    let heapSize = arr.length,
        temp
    for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i++) {
        heapify(arr, i, heapSize)
    }
    for (let j = heapSize - 1; j >= 1; j--) {
        temp = arr[0]
        arr[0] = arr[j]
        arr[j] = temp
        heapify(arr,0,--heapSize)
    }

   return arr 

}

/**
 * 
 * 
 * @param {Array} arr 
 * @param {int} x 
 * @param {int} len 未规整堆的大小
 */
function heapify(arr, x, len) {
    let l = 2 * x + 1 //堆的左节点
    let r = 2 * x + 2 //堆得右节点
    let largest = x,
        temp
    if (l < len && arr[l] > arr[largest]) {
        largest = l //如果左节点的值比父节点大，先标记其为最大的预备交换位置
    }
    if (r < len && arr[r] > arr[largest]) {
        largest = r
    }
    if (largest != x) {
        temp = arr[x]
        arr[x] = arr[largest]
        arr[largest] = temp
        heapify(arr, largest, len)
    }
}
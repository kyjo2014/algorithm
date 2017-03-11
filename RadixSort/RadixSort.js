/**
 * 基数排序：非比较排序
 * 利用桶排的概念，把所有待排的数据按照从低到高位先进行排序
 * 
 * @param {any} arr 待排数据
 * @param {any} maxDigita 待排数据中最大的位数
 * @returns 
 */
function radixSort(arr, maxDigita) {
    let mod = 10
    let dev = 1
    let counter = []
    for (let i = 0; i < maxDigita; i++ , dev *= 10, mod *= 10) {
        for (let j = 0; j < arr.length; j++) {
            let bucket = parseInt((arr[j] % mod) / dev)
            if (counter[bucket] == null) {
                counter[bucket] = []
            }
            counter[bucket].push(arr[j])
            
        }
       
        let pos = 0
        for (let j = 0; j < counter.length; j++) {
            let value = null
            if (counter[j] != null) {
                while ((value = counter[j].shift()) != null) {
                    arr[pos++] = value
                }
            }
        }
    }    
    return arr
}




var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

console.log(radixSort(arr, 2)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
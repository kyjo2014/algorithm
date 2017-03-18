/**
 * 插值查找
 * 
 * @param {any} a 
 * @param {any} value 
 * @param {any} low 
 * @param {any} high 
 * @returns 
 */
function InsertionSearch(a, value, low, high) {
    var mid = low + (value - a[low]) / (a[high] - a[low]) * (high - low);
    if (a[mid] == value)
        return mid;
    if (a[mid] > value)
        return InsertionSearch(a, value, low, mid - 1);
    if (a[mid] < value)
        return InsertionSearch(a, value, mid + 1, high);
}
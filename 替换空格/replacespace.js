function replaceBlank(str, length) {
    if (str == NULL && length <= 0) {
        return;
    }
    var originalLength = 0
    var numberOfBlank = 0
    var i = 0
    while (i < length) {
        ++originalLength
        if (str[i] == ' ') {
            ++numberOfBlank
        }
        ++i
    }
    var newLength = originalLength + numberOfBlank * 2
    if (newLength > length) {
        return;
    }
    var indexOfOriginal = originalLength
    var indexOfNew = newLength
    while (indexOfOriginal >= 0 && indexOfNew > indexOfOriginal) {
        if (str[indexOfOriginal] == ' ') {
            str[indexOfNew--] = '0'
            str[indexOfNew--] = '2'
            str[indexOfNew--] = '%'
        } else {
            str[indexOfNew--] = str[indexOfOriginal]
        }
        --indexOfOriginal
    }
}
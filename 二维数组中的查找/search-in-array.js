function find(matrix, rows, columns, number) {
    var found = false
    if (matrix != NULL && rows > 0 && columns > 0) {
        var row = 0
        var column = columns - 1
        while (row < rows && column >= 0) {
            if (matrix[row * columns + column] == number) {
                found = true
                break
            } else if (matrix[row * columns + column] > number) {
                --column
            } else {
                ++row
            }
        }
    }
    return found
}
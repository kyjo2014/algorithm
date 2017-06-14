function jumpFloor(number)
{
    // write code here
   /* if(number == 1 || number == 2) {
        return 1
    }
    return jumpFloor(number-1) + jumpFloor(number-2) + 1
	*/
    if (number < 0) {
        return;
    }
    if (number >=0 && number <= 2) {
        return number;
    }
    var result = [1,2];
    var temp = 0;
    for (var i = 0; i < number - 2; i++) {
        temp = result[0];
        result[0] = result[1];
        result[1] = temp + result[1];
    }
    return result[1];
}
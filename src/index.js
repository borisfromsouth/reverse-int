module.exports = function reverse (number) {
    let numLeft = 0;
    let res = 0;

    number = Math.abs(number);
    while(number){
        numLeft = number % 10;
        res = (res * 10) + numLeft;
        number = number / 10 | 0;
    }
  
    return res;
}

class Fibonacci {
    searchNumbers(num, firstNum=0, secondNum=1){
        return firstNum + secondNum == num ? true : firstNum + secondNum > num ? false : this.searchNumbers(num, secondNum, firstNum + secondNum);
    }
}

module.exports = Fibonacci;
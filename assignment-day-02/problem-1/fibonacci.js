const fibonacci = function(number) {
    if(number < 0) {
        if(number >= -2) return -1;
        else return fibonacci(number + 1) + fibonacci(number + 2);
    } else {
        if(number <= 2) return 1;
        else return fibonacci(number - 1) + fibonacci(number -2);
    }
}

console.log('Fibonacci of 33 is: ', fibonacci(33));
console.log('Fibonacci of -30 is: ', fibonacci(-30));
//normal way 

function fibonacci(n) {
    number1 = 0;
    number2 = 1;
    result = 0;

    fibonacci_array = [0,1]
    for (let i = 0; i < n; i++) {
            result = number1 + number2
            number1 = number2
            number2 = result
            fibonacci_array.push(number2)
    }

    console.log(fibonacci_array);
    console.log(result);
}
fibonacci(7);
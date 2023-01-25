// RECURSION

// defintion

    // the act of a function calling itself (function call inside itself)

// notes

    // recursive is often used instead of iteration

    // recursive functions are made of two parts:

        // base case
            // ends the recursion

        // recursive case
            // resumes the recursion

// example 1:

    // write function that counts down from number n

    function countDown (n) {
        console.log(n);
        let newNum = n - 1;

        // this is both the base case and the recursive case
        if (newNum >= 0) {
            countDown(newNum);
        }
    }

    countDown(10); // => 10 9 8 7 6 5 4 3 2 1

// example 2:

    // fibonacci function

        // ea value is the sum of the two previous values
        // 0 1 1 2 3 5 8 13 21...

    function fib(n) {
        // n is how many numbers we want to do this
        if (n < 2) {
            return 1;
        }
        return fib(n - 1) + fib(n - 2);
    }

    console.log(fib(7)); // => 21

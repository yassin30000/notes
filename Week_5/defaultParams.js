// DEFAULT PARAMETER

// definition

    // a param that is givena  default value in case we don't pass in an argument
    // if we do pass in an argument, then that arg value overwrites the default param value

// example 1:

    // write a function that takes in number

    function addToNum(num, amount = 2) {
        return num + amount;
    }

    console.log(addToNum(5)); // => 5 + 2 = 7
    console.log(addToNum(5, 5)); // => 5 + 5 = 10;

// example 2:

    function sayHi(userName = 'guest') {
        console.log(`Hello ${userName}, how are you?`);
    }

    sayHi(); // => Hello guest, how are you?
    sayHi('lilbewm'); // => Hello lilbewm, how are you?

// CALLBACKS
    // function that we pass into arg of another function

    // example 1:

    let example = (callback) => {
        console.log('before the callback');
        callback();
        console.log('after the callback');
    }

    let sayHi = () => {
        console.log('hiiiii');
    }

    example(sayHi); // => before the callback
                    // => hiiiii
                    // => after the callback


    // example 2 (anonymous callback):

    example(() => {
        console.log('second hiii');
    })

    // example 3:

    function sum(num1, num2, cb) {
        let sum = num1 + num2;
        return cb(sum);
    }

    function double(num) {
        return num * 2;
    }

    function tripler(num) {
        return num * 3;
    }

    console.log(sum(2, 4, double)); // => 12
    console.log(sum(3, 6, tripler)); // => 27

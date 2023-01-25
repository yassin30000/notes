// SYNCRONOUS
    // defintion

        // there is an inherent order among the commands and this order of execution is guaranteed

    // example
        // guaranteed that 1,2,3 run in order

        console.log(1);
        console.log(2);
        console.log(3);

// ASYNCRONOUS

    // defintion

        // there is no guarantee in the totla order that commands are executed

    // example

        // it SHOULD print out at around 1.5 seconds, but depending on computer specs, could be slower

        setTimeout(function() {
            console.log('times up!');
        }, 1500);

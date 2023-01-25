// TIMEOUTS

    // defintion

        // accepts a callback and an amt of time in milliseconds
        // this is asynchronous

    // syntax

        // setTimeout(cb, timeInMilliseconds, argForCb, argForCb);

    // exmaple

        // prints food after waiting 2 seconds

        function foo() {
            console.log('food');
        }

        setTimeout(foo, 2000);

// CLEAR TIMEOUTS

    // definiton

        // cancels a timeout that has yet to expire

    // syntax

        // clearTimeout(timeout)

    // exmaple

        // clears the timeout before timer expires

        let timeOut = setTimeout(foo, 2000);
        clearTimeout(timeOut);

// SET INTERVALS

        // definition

            // executes a cb repeatedly at the specified delay
            // accepts same args as setTimeout

        // exmaple

            function cats(cat1, cat2) {
                console.log(`first cat: ${cat1} \nsecond cat: ${cat2}`);
            }

            let i = setInterval(cats, 1000, 'josh', 'daniel'); // waits a second, then runs, waits a second, then runs, etc.

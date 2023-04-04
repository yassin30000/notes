// PROMISES

/*

    a promise helps us simplify callbacks to asynchronous functions

    we can use promises to chain several asynch functions together

    vocab:

        action: primary function of the promise
        pending: neither fulfilled or rejected
        fulfilled: promise action has succeeded
        rejected: promise action has failed (did not receive data form user)
        settled: promise is done (no longer pending, fail or success)

*/

    // syntax:

    const newPromise = new Promise( (resolve, reject) => {
        if ('successful condition') {
            resolve(num);
        } else {
            reject( () => console.error());
        }
    });

    // example

    function example (num) {
        console.log(num);
    }

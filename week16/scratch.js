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


    promise methods:

        both return a new promise

        then: takes in two params
            1. onFulilled: this is the cb to invoke if promise is fulfilled
            2. onRejected: this is the cb to invoke if prommise is rejected

        catch: takes on param
            1. error

*/

    // syntax:

    const newPromise = new Promise( (resolve, reject) => {
        if ('successful condition') {
            resolve();
        } else {
            reject( () => console.error());
        }
    });

    // example

   const zz = new Promise( (resolve) => {
        setTimeout( (msg) => resolve(msg), 1000);
   });

   function giveMsg(msg) {
        console.log(msg);
   }

   zz.then(giveMsg);

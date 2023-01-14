// IIFE

    // immediately invoked function expression
    // defines an anonymous function adn tehn immediately invokes it

// SYNTAX

    (function() {
        //code here...
    })();


// NOTES

    // keeps our global namespace unpolluted by function or variable names that we dont indend to use
    // we can use iffe's to make private functions or variables
    // this is because it is only invoked once (rest of app doesnt have access to it)

// example

    (() => {
        console.log('i didnt have to call this!');
    })();

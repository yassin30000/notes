// CLOSURES
    // an inner function that either USES or CHANGES a variable(s) from an outer function

    // CLOSURE RULES
        // 1. has access from any variable in its own scope
        // 2. has access from any variable in its outer function (before function obviously)
        // 3. will remember all of the variables from when it was defined even if the outer function returns

    // example:

    function climbTree(treeType) { // outer function

        let treeString = 'I climbed a(n) ';

        function sayClimbTree() { // inner function (this is a closure)
            return treeString + treeType; // using variable from outer function 'climbTree'(called 'capturing')
        }

        return sayClimbTree(); // return inner function call
    }

    console.log(climbTree('redwood')); // => I climbed a redwood

// PRIVATE STATE
    // its important to hide certain things
    // we cant declare private variables or functions in javascript

    // exmaple:

    function createCounter() {
        let count = 0;

        return function() { // this closure cannot be accessed, this is hidden
            count++;
            return count;
        }
    }

    let counter = createCounter();
    console.log(createCounter()); // => [Function (anonymous)]
    console.log(counter()); // => 1

// PASSIN ARGS IMPLICITLY
    // closures dont need params, because anything used inside, is auto added as a parameter

    function climbTree2(treeType) {
        let treeString = 'I climbed a(n) ';

        function sayClimbTree2() { // implicitly adding treeString and treeType params automatically
            return treeString + treeType;
        }
    }

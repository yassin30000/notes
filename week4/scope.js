// SCOPE
    // scope is how far variables can be accessed
    // There are three types of scope in JavaScript: global scope, local scope, and block scope.

    // global
        // variables that can be accessed by the whole page

        let global = "apple";

    // local
        // variables that are in a function, can only be accessed inside the function

        let global2 = () => {
            let local = "inside";
        };

    // block
        // variables that are in {}
        // if else, for loops, while loops, etc.

        let global3 = () => {
            if (1 > 2) {
                let block = "inside if";
            }
        };

// SCOPE CHAINING
    // when js first chekcs the local scope, and then every outer scope to find a variable

    // example:

        let name = "King"; // global variable

        let sayName = () => {
            console.log("My name is " + name); // looks for name in local, then global
        };

        sayName(); // => My name is King

// LEXICAL SCOPING
    // when we run a piece of code it is PARSED BEFORE IT IS RUN
    // the parsing time is what we call LEXING TIME

// VARIABLE SCOPES

        // var: function scoped (mostly)
        // let: block scoped
        // const: block scoped

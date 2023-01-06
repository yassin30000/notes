// SCOPE
    // scope is how far variables can be accessed
    // There are three types of scope in JavaScript: global scope, local scope, and block scope.

    // global
        // variables that can be accessed by the whole page

        let global = 'apple';

    // local
        // variables that are in a function, can only be accessed inside the function

        let global2 = () => {
            let local = 'inside';
        }

    // block
        // variables that are in {}
        // if else, for loops, while loops, etc.

        let global3 = () => {
            if (1 > 2) {
                let block = 'inside if'
            }
        }

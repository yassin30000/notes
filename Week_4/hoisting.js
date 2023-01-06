// HOISTING
    // a mechanism in which variables and function declarations are moved to the top of their scope
    // var is hoisted differently than let and const

    // example:

        // VAR
        // is hoisted and given value of undefined
        // because var is legacy, were returning the value it was given
        function test() {
            // var hoistedVar;
            console.log(hoistedVar);
            var hoistedVar = 10;
        }

        test(); // => undefined

        // LET
        // same as var, but gives you error, telling you whats actually wrong
        function test2() {
            console.log(hoistedLet);
            let hoistedLet = 10;
        }

        test2(); // => ReferenceError: Cannot access 'hoistedLet' before initialization

// TEMPORAL DEADZONE
    // the time before let and const is initialized but not used in the temporal deadzone
    // space between hoiseted variable and the variable initialization

    // example:

    let deadVar = 10; // not in the dead zone

    function test3() {
        // deadVar = undefined;
        console.log(deadVar); // in the dead zone

        let deadVar = 'not in the zone';
    }

    test3(); // => ReferenceError: Cannot access 'deadVar' before initialization

// REDECLARATION
    // var allows for redeclaration

    // AVOID
    var apple = 'apple';
    var apple = 'pineapple';
    console.log(apple); // => pineapple

    // let and const
    // you can only declare using let and const only once in the same scope

    let pair = 'pair';

    // you can redeclare let and const in diff scope

    let dog = 'haru';

    function sayDog() {
        let dog = 'idk';
        console.log(dog);
    }

    sayDog(); // => idk
    console.log(dog); // => haru

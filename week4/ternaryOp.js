// TERNARY OPERATORS
    // used in place of if else statement
    // can only have single expressions

    // ternart operators implicitly return

// SYNTAX

    // condition ? (if true do this) : (else, do this);

    // example:

    let fruit = 'lemon';

    fruit == 'lemon' ? console.log('it is a lemon') : console.log('its not a lemon'); // => it is a lemon
    fruit == 'pair' ? console.log('it is a lemon') : console.log('its not a lemon'); // => its not a lemon

    // exmaple 2: we can also stack ternary operators

    let fruit2 = 'apple';

    fruit2 == 'lemon' ? console.log('lemon') :
    fruit2 == 'apple' ? console.log('apple') :
    fruit2 == 'pair' ? console.log('pair') :
    console.log('no clue'); // => apple

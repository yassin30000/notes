// SWITCH CASE

// definition
    // used in place of if else statements and they perform different actions on different conditions

// notes
    // its considered legacy code, so not good practice for today

// syntax

    // switch(expression) {
    //     case compare value to case:
    //         // code...
    //         break;
    //     case 2:
    //         // code...
    //         break;
    //     default:
    //         // default code...
    // }

// example 1:

    let day = 'tuesday'

    switch(day) {
        case 'monday':
            console.log('its mon.');
            break;
        case 'tuesday':
            console.log('its tue.');
            break;
        case 'wednesday':
            console.log('its wed.');
            break;
        default:
            console.log('no clue');
    }

// example 2:

    let x = 5;

    switch(x + 10) {
        case 14: console.log('ooga booga'); break;
        case 15: console.log('corecct!!!!!!!!'); break;
        default: console.log('no clueeeee');
    }

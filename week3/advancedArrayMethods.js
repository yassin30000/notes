// FOR EACH
    // executes a provided function once for each element in array
    // does not mutate og function

    // SYNTAX
        let Array = [];
        Array.forEach(function (element, index, array){});

    // EXAMPLE: log all elements in array
        let arr1 = [1,2,3,4,5];

        arr1.forEach(function(el){
            console.log(el); // => 1 2 3 4 5
        });

// ARRAY MAP
    // calls a function on every element in an array in order to populate a new array

    // SYNTAX
        Array.map(function(element, index, array){});

    // EXAMPLE: return new array with all elements uppercased
        let arr2 = ['hello', 'mom', 'whats', 'up'];

        let newArr2 = arr2.map(function(el){
            return el.toUpperCase();
        });

        console.log(newArr2); // => [ 'HELLO', 'MOM', 'WHATS', 'UP' ]

// ARRAY FILTER
    // returns smaller array that has been filtered thru a function
    // callback function needs to returns a boolean

    // SYNTAX
        Array.filter(function(element, index, array){});

    // EXAMPLE: return new array woth words that have a 'o'
        let arr3 = ['hello', 'mom', 'whats', 'up'];

        let newArr3 = arr3.filter(function(el){
            return el.includes('o');
        });
        console.log(newArr3); // => [ 'hello', 'mom' ]

// ARRAY REDUCE
    // reduces an array to a single value given the callback function

    // SYNTAX
        Array.reduce(function(accumulator, currentValue){}, initialValue);
    // accumulator: this variable stays consistent, stuff is done to this variable and then it is returned
    // currentValue: which element of the array the method is one currently
    // initialValue: the first value that you want the method to start on

    // EXAMPLE: return sum of all elements in array
        arr4 = [2, 4, 6, 2, 8];

        let newArr4 = arr4.reduce(function(acc, el){
            return acc + el;
        });

    console.log(newArr4); // => 22

// ARRAY FIND
    // The find() method returns the first element in the provided array that satisfies the provided testing function.
    // If no values satisfy the testing function, undefined is returned.

    // SYNTAX
        Array.find(function(element, index, array){});

// ARRAY EVERY
    // tells whether all elements in the array pass the test implemented by the
    // provided function

    // SYNTAX

        Array.every(callback(el, index, array));

    // EXAMPLE:

        const isBelowThreshold = (currentValue) => currentValue < 40;

        const array1 = [1, 30, 39, 29, 10, 13];

        console.log(array1.every(isBelowThreshold));// => true

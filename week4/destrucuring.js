// DESTRUCTURE

    // Array
    // need to have variable name in same index of the value we want

        let arr = [10, 20];

        let [first, second] = arr;

        console.log(first + ' ' + second); // => 10, 20

    // Object
    // need to use the same key in order to put into variable

        // regular way: name the variable same as key

            let obj = {name: 'king', age: 12};

            let {name, age} = obj;

        console.log(name + ' ' + age); // => king 12

        // alias destructuring: use colon to rename variable differently from key

            let {name: catName, age: catAge} = obj;

            console.log(catName + ' ' + catAge); // => king 12

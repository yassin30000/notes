// CLASSES

    // defintion
         // a blueprint to create objects, or an object 'factory'

    // notes
        // *this* - has the value of the object that it exists inside of
        // *constructor* - method helps 'construct' an object
            // we tell it what the property vals will be when
            // we create an object using the class
        // *object class* - a class that helps defien objects
        // *object isntance* - object that has been created from a class
        // *pojo* - plain old javascript object
        // *instanceof* - an operator that tells us if an object is an instance of a certain class
        // *super* - a method that overrides a property value in a child class

    // syntax

        // class Classname {
        //     constructor(properties) {

        //     }
        // }

        // const instantobj = new Classname(propertyValues);

    // example

        class Animal {
            constructor(name, age, species, sound) { // this is not an obj, its a function
                this.name = name;
                this.age = age;
                this.species = species;
                this.sound = sound;
            }

            getSpecies() {
                return `${this.name} is a ${this.species}`;
            }

            speak() {
                console.log(this.sound);
            }
        }

        // our new object that were making
        const king = new Animal(
            'King',
            12,
            'Cat'
        );

        const haru = new Animal(
            'Haru',
            13,
            'Dog'
        )

        // console.log(king.getSpecies()); // => King is a Cat
        // console.log(king instanceof Animal); // => true


// INHERITANCE - allows us to define a class that takes all functionality of a parent
            // class and allows us to add more

        // if we want to define a new constructor, but still have access to the code in the parents class
        // we will use the super noethd inside of the child class' constructor
    // example

    class Dog extends Animal {
        constructor(name) {
            super(name, age, 'Dog', 'Woof')
        }
    }

    const bewmer = new Dog(
        'Bewmer',
        13,
        'Dog',
        'Bark'
    );

    bewmer.speak(); // => bark

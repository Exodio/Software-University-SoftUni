function solveClasses() {

    class Pet {
        constructor(owner, name) {
            this.owner = owner;
            this.name = name;
            this.comments = [];
        }

        addComment(comment) {

            if (!this.comments.includes(comment)) { //if comment is not present in comments array add it
                this.comments.push(comment);
                return "Comment is added.";
            }

            throw new Error("This comment is already added!"); //else if present, return error
        }

        feed() {
            return `${this.name} is fed`; //return message from name
        }

        toString() {
            let output = `Here is ${ this.owner }'s pet ${ this.name }.`; //this function has this output

            if (this.comments.length > 0) { //if there are any comments included included in the arr
                output += `\nSpecial requirements: ${this.comments.join(", ")}`; //print them
            }

            return output; //always return the result in order to be visible!
        }
    }

    class Cat extends Pet {
        constructor(owner, name, insideHabits, scratching) {
            super(owner, name);
            this.insideHabits = insideHabits;
            this.scratching = scratching;
        }

        feed() {
            return super.feed() + ", happy and purring."; //return the previous feed method with additonal attached last message to it
        }

        toString() {
            let output = []; //create storage are for output
            output += super.toString(); //add storage to the previous data in order to create new empty space

            output += "\nMain information:"; //add the new data on a new line
            output += `\n${this.name} is a cat with ${this.insideHabits }`; //add the new data on a new line

            if (this.scratching) { // if this scratching property is true
                output += ", but beware of scratches."; //if true add the following message to the end of the output arr
            }

            return output; // always return the action data in order to be visible!
        }

    }

    class Dog extends Pet {
        constructor(owner, name, runningNeeds, trainability) {
            super(owner, name);
            this.runningNeeds = runningNeeds;
            this.trainability = trainability;
        }

        feed() {
            return super.feed() + ", happy and wagging tail."; //we inherit the data from the previous feed method and attach a new end line to it as we return;
        }

        toString() {
            let output = [super.toString()]; // we append the data from the previous to string with super and we declare a new output = [], more function than previous toString method
            output += "\nMain information:"; //we add the required lines to the new output combine with the previous one on a new line
            output += `\n${this.name} is a dog with need of ${this.runningNeeds}km running every day and ${this.trainability} trainability.`; //we add the required lines to the new output combine with the previous one on a new line

            return output; // always return the output in order to insert the new data
        }
    }
    
    return { //never forget to return the classes in order to have visible outputs!
        Pet,
        Cat,
        Dog,
    };
}

//input
let classes = solveClasses();
let pet = new classes.Pet('Ann', 'Merry');
console.log(pet.addComment('likes bananas'));
console.log(pet.addComment('likes sweets'));
console.log(pet.feed());
console.log(pet.toString());

let cat = new classes.Cat('Jim', 'Sherry', 'very good habits', true);
console.log(cat.addComment('likes to be brushed'));
console.log(cat.addComment('sleeps a lot'));
console.log(cat.feed());
console.log(cat.toString());

let dog = new classes.Dog('Susan', 'Max', 5, 'good');
console.log(dog.addComment('likes to be brushed'));
console.log(dog.addComment('sleeps a lot'));
console.log(dog.feed());
console.log(dog.toString());

//output
// Comment is added.
// Comment is added.
// Merry is fed
// Here is Ann's pet Merry.
// Special requirements: likes bananas, likes sweets

// Comment is added.
// Comment is added.
// Sherry is fed, happy and purring.
// Here is Jim's pet Sherry.
// Special requirements: likes to be brushed, sleeps a lot
// Main information:
// Sherry is a cat with very good habits, but beware of scratches.

// Comment is added.
// Comment is added.
// Max is fed, happy and wagging tail.
// Here is Susan's pet Max.
// Special requirements: likes to be brushed, sleeps a lot
// Main information:
// Max is a dog with need of 5km running every day and good trainability.
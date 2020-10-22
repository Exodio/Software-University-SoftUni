function solveClasses() {
    class Hall {
        constructor(capacity, name) {
            this.capacity = capacity;
            this.name = name;
            this.events = [];

        }

        hallEvent(title) {

            if (!this.events.includes(title)) { //check if even is added and if it included in the array
                this.events.push(title); //if not add it
                return "Event is added.";
            }

            throw new Error("This event is already added!"); //else throw error
        }

        close() {
            this.events = []; //clears out the events array
            return `${this.name} hall is closed.`;
        }

        toString() {
            let output = []; // create a storage for the events
            output.push(`${this.name} hall - ${this.capacity}`); //add the event template for each data to the storage

            if (this.events.length > 0) { //if there are any events in the arr add them to the storage arr
                output.push(`Events: ${this.events.join(", ")}`);
            }

            return output.join("\n"); //print each event on a new line
        }
    }

    class MovieTheater extends Hall {
        constructor(capacity, name, screenSize) {
            super(capacity, name);
            this.screenSize = screenSize;
            this.events = [];
        }

        close() {
            return super.close() + "All screenings are over."; //inherits the close() method and returns the required message on the same line
        }

        toString() {
            super.toString(); // extend the previous function toString
            let output = []; //create new storage location

            output.push(super.toString()); //add the previous data to the new empty storage
            output.push(`${this.name} is a movie theater with ${this.screenSize} screensize and ${this.capacity} seats capacity.`); //add the new string elements to the new storage location that has been extended from the previous one

            return output.join("\n"); //print new output on a new line
        }
    }

    class ConcertHall extends Hall {
        constructor(capacity, name) {
            super(capacity, name);
            this.events = [];
            this.performers = []; //!
        }

        hallEvent(title, performers) { //name is mistakenly made it is hallEvent not hallEvents as listed in the description

            if (!this.events.includes(title)) { //checks if we have not yet inherited already the new title property
                this.events.push(title); //adding new title to the events array
                this.events.push(performers); //also creating new property to the events array [events[name][capacity][PERFORMERS]];
                this.performers.push(performers); //!add the date of performers into the new array for future use
                return "Event is added.";
            }

            throw new Error("This event is already added!");
        }

        close() {
            return super.close() + "All performers are over."; //inherits the close() method and returns the required message on the same line
        }

        toString() {
            super.toString(); // extend the previous function toString
            let output = []; //create new storage location
            output.push(super.toString()); //adds the data from the extension of the toString and its data to the new empty storage

            if (this.events.length > 0) { // if there are any events to the event array
                for (const eachEvent of this.performers) { //go through each indication of event in the saved performers array, as property performers in events is not itterible
                    output.push(`Performers: ${eachEvent.join(", ")}.`); //add it to the new output storage and print each event saparated with space
                }
            }

            return output.join("\n"); //join each line event on a new line
        }
    }

    return {
        Hall,
        MovieTheater,
        ConcertHall,
    }
}

//input
let classes = solveClasses();
let hall = new classes.Hall(20, 'Main');
console.log(hall.hallEvent('Breakfast Ideas'));
console.log(hall.hallEvent('Annual Charity Ball'));
console.log(hall.toString());
console.log(hall.close());
//--------------------------------------------------------------------------------------
let movieHall = new classes.MovieTheater(10, 'Europe', '10m');
console.log(movieHall.hallEvent('Top Gun: Maverick'));
console.log(movieHall.toString());
//--------------------------------------------------------------------------------------
let concert = new classes.ConcertHall(5000, 'Diamond');
console.log(concert.hallEvent('The Chromatica Ball', ['LADY GAGA']));
console.log(concert.toString());
console.log(concert.close());
console.log(concert.toString());

//output
// Event is added.
// Event is added.
// Main hall - 20
// Events: Breakfast Ideas, Annual Charity Ball
// Main hall is closed.
// --------------------------------------------------------------------------------------
// Event is added.
// Europe hall - 10
// Events: Top Gun: Maverick
// Europe is a movie theater with 10m screensize and 10 seats capacity.
// --------------------------------------------------------------------------------------
// Event is added.
// Diamond hall - 5000
// Events: The Chromatica Ball
// Performers: LADY GAGA.
// Diamond hall is closed.Аll performances are over.
// Diamond hall - 5000
class Movie {
  constructor(movieName, ticketPrice) {
    this.movieName = movieName;
    this.ticketPrice = Number(ticketPrice);
    this.screenings = [];
    this.screeningProfit = 0; //added in endScreening calculation
    this.soldTickets = 0; //added in endScreening calculation
  }

  newScreening(date, hall, description) {
    let screeningObj = {// a new obj of the date where it can be stored depending on the curr input
      date: date,
      hall: hall,
      description: description,
    };

    let enteredScreening = this.screenings.find((x) => x.date === date && x.hall === hall); //check each entered screening's date and hall if it is equal to the new screening inputs

    if (!enteredScreening) {
      //if they are not equal(and there is not an enteredScreening) this means that they are not in the screenings arr, so add them, => enteredScreening === undefined;
      this.screenings.push(screeningObj); //we add them as a new object of the received date input issued as an obj
      return `New screening of ${this.movieName} is added.`;
    }

    throw new Error(`Sorry, ${hall} hall is not available on ${date}`); //else they are in the arr so throw an error
  }

  endScreening(date, hall, soldTickets) {
    let enteredScreening = this.screenings.find((x) => x.date === date && x.hall === hall); //check each entered screening's date and hall if it is equal to the new screening inputs

    if (!enteredScreening) {//If there is no such entered sceening
      throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
    }

    let currentScreeningProfit = Number(soldTickets) * Number(this.ticketPrice); //calculate current profit of sold tickets
    this.screeningProfit += currentScreeningProfit; //add it to the total screening profit
    this.soldTickets += Number(soldTickets); //add total sold tickets for the movie

    let screeningIndex = 0; // saving the screening location from the screenigns arr in order to delete it
    for (let i = 0; i < this.screenings.length; i++) { //we go through each screening

      if ((this.screenings[i].date === date && this.screenings[i].hall) === hall) { //if we locate the screening with the matching date and hall, we save it
        screeningIndex = i; //we save it's location
        break;
      }
    }

    this.screenings.splice(screeningIndex, 1); //once located we remove it from the screenings arr
    return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentScreeningProfit}`;
  }

  toString() {
    let result = [];

    result.push(`${this.movieName} full information:`);
    result.push(`Total profit: ${this.screeningProfit.toFixed(0)}$`);
    result.push(`Sold Tickets: ${this.soldTickets}`);

    if (this.screenings.length > 0) {//we check if there is still remainings in the screenings arr, if there are this means that a screening is still running and it was not verified through endScreening method
      result.push(`Remaining film screenings:`);

      let runningScreenings = this.screenings.sort((a, b) => a.hall.localeCompare(b.hall)); //we sort the remaining screenings alphabetically

      for (const eachScreening of runningScreenings) {//we go through each runningScreening and we add to the result arr
        result.push( `${eachScreening.hall} - ${eachScreening.date} - ${eachScreening.description}`);
      }
    } else {//if there are no screenings running left in this.screenings

      return "No more screenings!";
    }

    return result.join("\n"); //we output each action added to the result arr on a new line
  }
}

//input
let m = new Movie("Wonder Woman 1984", "10.00");
console.log(m.newScreening("October 2, 2020", "IMAX 3D", `3D`));
console.log(m.newScreening("October 3, 2020", "Main", `regular`));
console.log(m.newScreening("October 4, 2020", "IMAX 3D", `3D`));
console.log(m.endScreening("October 2, 2020", "IMAX 3D", 150));
console.log(m.endScreening("October 3, 2020", "Main", 78));
console.log(m.toString());

m.newScreening("October 4, 2020", "235", `regular`);
m.newScreening("October 5, 2020", "Main", `regular`);
m.newScreening("October 3, 2020", "235", `regular`);
m.newScreening("October 4, 2020", "Main", `regular`);
console.log(m.toString());

//output
// New screening of Wonder Woman 1984 is added.
// New screening of Wonder Woman 1984 is added.
// New screening of Wonder Woman 1984 is added.
// Wonder Woman 1984 movie screening on October 2, 2020 in IMAX 3D hall has ended. Screening profit: 1500
// Wonder Woman 1984 movie screening on October 3, 2020 in Main hall has ended. Screening profit: 780
// Wonder Woman 1984 full information:
// Total profit: 2280$
// Sold Tickets: 228
// Remaining film screenings:
// IMAX 3D - October 4, 2020 - 3D

// Wonder Woman 1984 full information:
// Total profit: 2280$
// Sold Tickets: 228
// Remaining film screenings:
// 235 - October 4, 2020 - regular
// 235 - October 3, 2020 - regular
// IMAX 3D - October 4, 2020 - 3D
// Main - October 5, 2020 - regular
// Main - October 4, 2020 - regular

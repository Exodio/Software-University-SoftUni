function solve(input) {
    let movieName = String(input.shift());

    let ticketSum = 0;

    let studentTicket = 0;
    let standardTicket = 0;
    let kidTicket = 0;

    while (movieName !== "Finish") {
        let freeSeats = Number(input.shift());
        let ticketType = String(input.shift());

        let ticketsSoldCounter = 0;

        while (ticketType !== "End") {
            if (ticketType === "student") {
                studentTicket++;

            } else if (ticketType === "standard") {
                standardTicket++;

            } else {
                kidTicket++;
            }

            ticketsSoldCounter++;
            ticketSum++;

            if (ticketsSoldCounter >= freeSeats) {
                break;
            }


            ticketType = input.shift();
        }

        console.log(`${movieName} - ${(ticketsSoldCounter / freeSeats * 100).toFixed(2)}% full.`);


        movieName = input.shift();
    }

    console.log(`Total Tickets: ${ticketSum}`);
    console.log(`${(studentTicket / ticketSum * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTicket / ticketSum * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTicket / ticketSum * 100).toFixed(2)}% kids tickets.`);

}
solve(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"
]);
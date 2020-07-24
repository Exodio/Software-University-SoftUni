function inboxManager(input) {

    let usersCollectionObj = {};
    let usersCount = 0;


    for (const commandLine of input) {

        if (commandLine === "Statistics") {
            break;
        }

        let [command, username, email] = commandLine.split("->");

        if (command === "Add") {

            if (usersCollectionObj.hasOwnProperty(username)) {
                console.log(`${username} is already registered`);
            } else {
                usersCollectionObj[username] = [];
                usersCount++;
            }

        } else if (command === "Send") {
            usersCollectionObj[username] = [...usersCollectionObj[username], email];

        } else if ((command === "Delete")) {
            if (!usersCollectionObj.hasOwnProperty(username)) {
                console.log(`${username} not found!`);
            } else {
                delete usersCollectionObj[username];
                usersCount--;
            }
        }
    }

    let userEntries = Object.entries(usersCollectionObj);
    let sortedEntries = userEntries.sort((a, b) =>
        b[1].length - a[1].length || a[0].localeCompare(b[0]));

    console.log(`Users count: ${usersCount}`);

    for (const kvp of sortedEntries) {
        console.log(kvp[0]);

        for (const value of kvp[1]) {
            console.log(`- ${value}`);
        }
    }
}

inboxManager([
    'Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Your loan is overdue',
    'Add->Mike',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Delete->Peter',
    "Send->George->I'm busy",
    'Send->Mike->Another random test mail',
    'Delete->George',
    'Statistics'
]);
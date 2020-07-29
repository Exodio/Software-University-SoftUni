function messagesManager(input) {

    let messagesCapacity = Number(input.shift());
    let recordsObj = {};

    for (const eachLine of input) {
        let command = eachLine.split("=");

        if (command[0] === "Statistics") {
            break;
        }

        switch (command[0]) {

            case "Add":

                if (!recordsObj.hasOwnProperty(command[1])) {
                    recordsObj[command[1]] = {
                        messagesSent: Number(command[2]),
                        messagesReceived: Number(command[3]),
                    }
                }
                break;

            case "Message":

                if (recordsObj.hasOwnProperty(command[1]) && recordsObj.hasOwnProperty(command[2])) {
                    recordsObj[command[1]].messagesSent += 1;
                    recordsObj[command[2]].messagesReceived += 1;

                    if (recordsObj[command[1]].messagesSent + recordsObj[command[1]].messagesReceived >= messagesCapacity) {
                        delete recordsObj[command[1]];
                        console.log(`${command[1]} reached the capacity!`);
                    }

                    if (recordsObj[command[2]].messagesSent + recordsObj[command[2]].messagesReceived >= messagesCapacity) {
                        delete recordsObj[command[2]];
                        console.log(`${command[2]} reached the capacity!`);
                    }
                }
                break;

            case "Empty":

                if (command[1] === "All") {
                    recordsObj = {};
                } else {
                    delete recordsObj[command[1]];
                }
                break;
        }

    }

    let entries = Object.entries(recordsObj);
    let usersCount = entries.length;
    let sortedEntries = entries.sort((a, b) => b[1].messagesReceived - a[1].messagesReceived || a[0].localeCompare(b[0]));

    
    console.log(`Users count: ${usersCount}`);
    sortedEntries.forEach(kvp => {
        console.log(`${kvp[0]} - ${kvp[1].messagesSent + kvp[1].messagesReceived}`);
    });
}

messagesManager([
    '10',
    'Add=Mark=5=4',
    'Add=Clark=3=5',
    'Add=Berg=9=0',
    'Add=Kevin=0=0',
    'Message=Berg=Kevin',
    'Statistics'
]);
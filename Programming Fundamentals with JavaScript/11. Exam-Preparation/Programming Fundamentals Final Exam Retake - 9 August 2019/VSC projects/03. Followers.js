function followers(input) {

    let followersRecordObj = {};

    for (const eachLine of input) {


        if (eachLine === "Log out") {
            break;
        }

        let command = eachLine.split(": ");

        switch (command[0]) {

            case "New follower":
                if (!followersRecordObj.hasOwnProperty(command[1])) {
                    followersRecordObj[command[1]] = {
                        likes: 0,
                        comments: 0,
                    };
                }
                break;

            case "Like":
                if (!followersRecordObj.hasOwnProperty(command[1])) {
                    followersRecordObj[command[1]] = {
                        likes: Number(command[2]),
                        comments: 0,
                    };
                } else if (followersRecordObj.hasOwnProperty(command[1])) {
                    followersRecordObj[command[1]].likes += Number(command[2]);
                }
                break;

            case "Comment":
                if (!followersRecordObj.hasOwnProperty(command[1])) {
                    followersRecordObj[command[1]] = {
                        likes: 0,
                        comments: 1,
                    };
                } else if ((followersRecordObj.hasOwnProperty(command[1]))) {
                    followersRecordObj[command[1]].comments += 1;
                }
                break;

            case "Blocked":
                if (followersRecordObj.hasOwnProperty(command[1])) {
                    delete followersRecordObj[command[1]];
                } else if (!followersRecordObj.hasOwnProperty(command[1])) {
                    console.log(`${command[1]} doesn't exist.`);
                }
                break;
        }
    }

    let followersRecordEntries = Object.entries(followersRecordObj);
    let recordsCount = followersRecordEntries.length;
    let sortedRecords = followersRecordEntries.sort((a, b) => b[1].likes - a[1].likes || a[0].localeCompare(b[0]));

    console.log(`${recordsCount} followers`);
    sortedRecords.forEach(kvp => {
        console.log(`${kvp[0]}: ${kvp[1].likes + kvp[1].comments}`);
    });
}

followers([
    'New follower: gosho',
    'Like: gosho: 5',
    'Comment: gosho',
    'New follower: gosho',
    'New follower: tosho',
    'Comment: gosho',
    'Comment: tosho',
    'Comment: pesho',
    'Log out'
]);
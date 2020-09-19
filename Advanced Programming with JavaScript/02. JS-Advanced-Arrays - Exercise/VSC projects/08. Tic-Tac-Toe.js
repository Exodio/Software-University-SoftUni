function ticTacToe(input) {

    let dashboardArr = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let player = "X";
    let isWin = false;

    for (let i = 0; i < input.length; i++) {
        let [row, column] = input[i].split(" ").map(x => Number(x));

        if (!dashboardArr[row][column]) {
            dashboardArr[row][column] = player;
        } else {
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        if (winCheck(dashboardArr, player)) {
            isWin = true;

            console.log(`Player ${player} wins!`);
            printResult(dashboardArr);

            return;

        } else if (!dashboardArr.some(x => x.includes(false))) {
            console.log("The game ended! Nobody wins :(");
            printResult(dashboardArr);

            return;
        }

        if (player === "X") {
            player = "O";
        } else {
            player = "X";
        }
    }

    function winCheck(currentDashboard, state) {
        let isWin = false;

        for (let i = 0; i < 3; i++) {
            if (currentDashboard[i][0] === state && currentDashboard[i][1] === state && currentDashboard[i][2] === state) {
                isWin = true;
                break;
            }

            if (currentDashboard[0][i] === state && currentDashboard[1][i] === state && currentDashboard[2][i] === state) {
                isWin = true;
                break;
            }
        }

        if (!isWin) {
            if ((currentDashboard[0][0] === state && currentDashboard[1][1] === state && currentDashboard[2][2] === state) ||
                (currentDashboard[2][0] === state && currentDashboard[1][1] === state && currentDashboard[0][2] === state)) {
                isWin = true;
            }
        }

        return isWin;
    }

    function printResult(dashboardArr) {
        dashboardArr.forEach(x => {
            console.log(x.join("\t"));
        });

    }
}

ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"
]);
function solve(input){

    let taskHours = input[0].split(" ").map(Number);
    let commandLine = input.slice(1);

    for (let i = 0; i < commandLine.length; i++) {
        let tokens = commandLine[i].split(" ");

        if(tokens[0] === "End"){
            break;
        }

        if(tokens[0] === "Complete"){
            let index = Number(tokens[1]);

            if(index >= taskHours.length || index < 0){
                continue;
            }else{
                taskHours.splice(index,1,0);
            }

        }else if(tokens[0] === "Change"){
            let index = Number(tokens[1]);
            let time = Number(tokens[2]);

            if(index >= taskHours.length || index < 0){
                continue;
            }else{
                if(time > 5){
                    time = 5;
                }
                taskHours.splice(index,1,time);
            }

        }else if(tokens[0] === "Drop"){
            let index = Number(tokens[1]);

            if(index >= taskHours.length || index < 0){
                continue;
            }else {
                taskHours.splice(index,1,-1);
            }

        }else if(tokens[0] === "Count" && tokens[1] === "Completed"){
            let completedTasks = 0;
            
            for (const eachTask of taskHours) {
                if(eachTask === 0){
                    completedTasks++;
                }
            }
            console.log(completedTasks);
            
        }else if(tokens[0] === "Count" && tokens[1] === "Incomplete"){
            let incompletedTasks = 0;

            for (const eachTask of taskHours) {
                if(eachTask !== 0 && eachTask > 0){
                    incompletedTasks++;
                }
            }
            console.log(incompletedTasks);
            
        }else if(tokens[0] === "Count" && tokens[1] === "Dropped"){
            let droppedTasks = 0;

            for (const eachTask of taskHours) {
                if(eachTask < 0){
                    droppedTasks++;
                }
            }
            console.log(droppedTasks);     
        }
    }

    let IncompleteTasksResult = taskHours.filter(task => task !== 0 && task > 0);
    console.log(IncompleteTasksResult.join(" "));
}

solve([
    "1 2 3 4 5 4 0 3 2 1",
    "Complete 85",
    "Complete 1",
    "Complete 2",
    "Drop 3",
    "Change 4 10",
    "Count Completed",
  ]);
//   solve([
//   '1 -1 2 3 4 5',
//   'Complete 4',
//   'Change 0 4',
//   'Drop 3',
//   'Count Dropped',
//   'End'
// ]);
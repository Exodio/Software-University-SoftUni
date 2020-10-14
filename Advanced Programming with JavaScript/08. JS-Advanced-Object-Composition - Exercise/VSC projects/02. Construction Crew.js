// function solve(workerProps) {

//     if (workerProps.dizziness) { //workerProps.dizziness===true
//         workerProps.levelOfHydrated += workerProps.weight * (workerProps.experience * 0.1);
//         workerProps.dizziness = false;
//     }

//     return workerProps; //console.log(workerProps);
// }

function solve(workerProps) {

  if (workerProps.dizziness) { //workerProps.dizziness===true
    let { experience, weight } = workerProps;
    
    workerProps.levelOfHydrated += experience * weight * 0.1;
    workerProps.dizziness = false;
  }

  return workerProps; //console.log(workerProps);
}

solve({
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true,
});

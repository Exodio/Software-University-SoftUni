function solve(input) {
  let plunderDays = Number(input.shift());
  let plunderTotal = Number(input.shift());
  let expectedPlunder = Number(input.shift());

  let result = 0;
  let collectedPlunder = plunderTotal;

  for (let i = 1; i <= plunderDays; i++) {
    if (i % 3 === 0) {
      plunderTotal *= 1.5;
    }
    result += plunderTotal;
    if (i % 5 === 0) {
      result *= 0.7;
    }
    plunderTotal = collectedPlunder;
  }

  if (result >= expectedPlunder) {
    console.log(`Ahoy! ${result.toFixed(2)} plunder gained.`);
  } else {
    console.log(`Collected only ${((result / expectedPlunder) * 100).toFixed(2)}% of the plunder.`);
  }
}

solve(["10", "20", "380"]);

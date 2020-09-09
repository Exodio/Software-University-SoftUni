function solve(input) {

  let textString = input.shift();
  let foodPattern = /([|#])(?<itemName>[A-Za-z\s]+)\1(?<expirationDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;

  let itemsArr = [];
  let totalCalories = 0;

  let match = foodPattern.exec(textString);

  while (match) {
    let food = match.groups.itemName;
    let expiration = match.groups.expirationDate;
    let kcal = Number(match.groups.calories);

    itemsArr.push(`Item: ${food}, Best before: ${expiration}, Nutrition: ${kcal}`);
    totalCalories += kcal;

    match = foodPattern.exec(textString);
  }

  let daysTotal = Math.floor(totalCalories / 2000);
  console.log(`You have food to last you for: ${daysTotal} days!`);

  for (const itemInfo of itemsArr) {
    console.log(itemInfo);
  }
}

solve([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);

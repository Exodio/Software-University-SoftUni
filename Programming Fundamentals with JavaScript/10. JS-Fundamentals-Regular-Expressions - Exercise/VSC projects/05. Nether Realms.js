function netherRealms(input) {

  let splittedPattern = /[, ]+/g;
  let demons = input[0].split(splittedPattern);

  let healthPattern = /[^0-9\+\-\*\/\.]/g;
  let numbersSumPattern = /[+-]?\d+\.?\d*/g;
  let damagePattern = /\*|\//g;

  let participantsObj = {};

  for (const eachDemon of demons) {
    let health = 0;
    let damage = 0;

    if (eachDemon.match(healthPattern) !== null) {
      for (const eachChar of eachDemon.match(healthPattern)) {
        health += eachChar.charCodeAt(0);
      }
    }

    let digits = eachDemon.match(numbersSumPattern);

    if (digits !== null) {
      for (const eachDigit of digits) {
        damage += Number(eachDigit);
      }
    }

    let multiplyOrSubtract = eachDemon.match(damagePattern);

    if (multiplyOrSubtract !== null) {
      for (const opperation of multiplyOrSubtract) {
        
        if (opperation === "*") {
          damage *= 2;
        } else if (opperation === ("/")) {
          damage /= 2;
        }
      }
    }

    participantsObj[eachDemon] = {};
    participantsObj[eachDemon]["health"] = health;
    participantsObj[eachDemon]["damage"] = damage;
  }


  let sortedEntries = Object.entries(participantsObj).sort((a, b) =>
    a[0].localeCompare(b[0]));

  for (const [key, value] of sortedEntries) {
    console.log(`${key} - ${value["health"]} health, ${value["damage"].toFixed(2)} damage`);
  }
}

netherRealms(["M3ph-0.5s-0.5t0.0**"]);

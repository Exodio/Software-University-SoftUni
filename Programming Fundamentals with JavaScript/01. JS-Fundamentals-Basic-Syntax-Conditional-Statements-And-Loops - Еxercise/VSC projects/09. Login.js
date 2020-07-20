function solve(input) {
  let userName = String(input.shift());

  let passwordInReverse = String(userName.split("").reverse().join(""));

  let loginAttemptsCounter = 0;

  let password = String(input.shift());

  if (password === passwordInReverse) {
    console.log(`User ${userName} logged in.`);
    return;
  }
  while (password !== passwordInReverse) {
    let newPasswordAttempt = String(password);

    if (loginAttemptsCounter === 4) {
      console.log(`User ${userName} blocked!`);
      return;
    } else if (newPasswordAttempt === passwordInReverse) {
      console.log(`User ${userName} logged in.`);
      break;
    } else {
      console.log(`Incorrect password. Try again.`);
    }
    loginAttemptsCounter++;

    newPasswordAttempt = password;
  }
}
solve(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
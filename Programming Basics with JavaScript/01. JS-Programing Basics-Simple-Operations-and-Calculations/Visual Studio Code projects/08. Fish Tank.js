function FishTank(input) {
    let lenght = Number(input.shift());
    let width = Number(input.shift());
    let higth = Number(input.shift());
    let percents = Number(input.shift());

    let waterTankSize = lenght * width * higth;
    let waterTankTotalLitersFree = (waterTankSize * 0.001);
    let inPercentage = percents * 0.01;

    let LitersLeft = (waterTankTotalLitersFree * (1 - inPercentage));

    console.log(LitersLeft.toFixed(3));

}
FishTank(["85", "75", "47", "17"]);
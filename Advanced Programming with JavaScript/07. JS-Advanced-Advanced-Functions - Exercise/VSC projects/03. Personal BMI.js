function solve(name, age, weight, height) {

    let bmiCalc = Math.round(Number(weight) / ((Number(height) / 100) * (Number(height) / 100)));
    let patientChart = {
        name,
        personalInfo: {
            age,
            weight,
            height,
        },
        BMI: bmiCalc,
    }

    if (patientChart.BMI < 18.5) {
        patientChart.status = "underweight";
    } else if (patientChart.BMI < 25) {
        patientChart.status = "normal";
    } else if (patientChart.BMI < 30) {
        patientChart.status = "overweight";
    } else if (patientChart.BMI >= 30) {
        patientChart.status = "obese";
        patientChart.recommendation = "admission required";
    }

    return patientChart;
}

//input
console.log(solve('Honey Boo Boo', 9, 57, 137));

//output { name: 'Honey Boo Boo', personalInfo: { age: 9, weight: 57, height: 137 }, BMI: 30, status: 'obese', recommendation: 'admission required' }
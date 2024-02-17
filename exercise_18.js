/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
 */

function bmiCalculator (weight, heightCentimeters) {
    const HEIGHT_IN_METERS = heightCentimeters/100
    if (weight / HEIGHT_IN_METERS**2 <= 18.5) {
        return "Underweight";
    } else if (weight / HEIGHT_IN_METERS**2 <= 25) {
        return "Normal";
    } else if (weight / HEIGHT_IN_METERS**2 <= 30) {
        return "Overweight";
    } else if (weight / HEIGHT_IN_METERS**2 > 30) {
        return "Obese"
    }
}

console.log(bmiCalculator(100, 182));
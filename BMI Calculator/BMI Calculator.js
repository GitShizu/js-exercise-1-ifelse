// Ask the user for their weight (in kilograms) and their height (in meters). Calculate their BMI (weight / height^2). If their BMI is under 18.5, tell them they are underweight. If it's between 18.5 and 24.9, tell them they are normal weight. If it's 25 or over, tell them they are overweight.

let WeightInput = prompt("Type your weight in kg here")
let HeightInput = prompt("Type your height in meters here")
let Weight = parseInt(WeightInput)
let Height = parseInt(HeightInput)
let BMI = Weight / (Height**2)
if (BMI<=18.5) {
    // alert(BMI);
    alert("Underweight");
}else if (BMI>=18.5 && BMI<=24.9) {
    // alert(BMI);
    alert("Normal weight");
}else if (BMI>=25) {
    // alert(BMI);
    alert("Overweight");
}

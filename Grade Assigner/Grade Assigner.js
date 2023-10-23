// Ask the user for their test score. If their score is 90 or above, assign them an 'A'. If it's 80 or above but less than 90, assign them a 'B'. If it's 70 or above but less than 80, assign them a 'C'. If it's 60 or above but less than 70, assign them a 'D'. If it's less than 60, assign them an 'F'.

let TestScoreInput = prompt("Type your score here")
let TestScore = parseInt(TestScoreInput)
if (TestScore>=90) {
    alert("You got an A")
}
if (TestScore>=80 && TestScore<90) {
    alert("You got a B")
}
if (TestScore>=70 && TestScore<80) {
    alert("You got a C")
}
if (TestScore>=60 && TestScore<70) {
    alert("You got a D")
}
if (TestScore<60) {
    alert("You got an F")
}
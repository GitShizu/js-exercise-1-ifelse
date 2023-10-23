// Ask the user for a year. If the year is evenly divisible by 4 and not evenly divisible by 100, or if the year is evenly divisible by 400, then it's a leap year. Otherwise, it's not a leap year. Tell the user whether the year they entered is a leap year or not.


let SubjectYear = prompt("Type a year here")
let SubjectYearNumeric = parseInt(SubjectYear)
let DivisibleBy4 = SubjectYearNumeric%4
let DivisibleBy100 = SubjectYearNumeric%100
let DivisibleBy400 = SubjectYearNumeric%400
if (((DivisibleBy4=0) && !(DivisibleBy100=0)) || (DivisibleBy400=0)){
    alert("It's a leap year")
}else{
    alert("it's not a leap year")
}

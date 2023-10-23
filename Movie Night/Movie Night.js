// Ask the user for their age. If they are under 13, tell them they can only see PG rated movies. If they are 13 or over but under 17, tell them they can see PG and PG-13 rated movies. If they are 17 or over, tell them they can see all movies.

let UserAgeInput = prompt("Type your age here")
let UserAge = parseInt(UserAgeInput)
if (UserAge<13) {
    alert("You can watch only PG rated movies")
}
if ((UserAge>=13) && (UserAge<17)) {
    alert("you can watch PG and PG-13 rated movies");
}
if (UserAge>=17) {
    alert("you can watch all the movies");
}
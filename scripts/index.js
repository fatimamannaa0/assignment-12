let score = 75;
let hasSubmittedAssignments = true;
let grade;
let status;

if (score >= 0 && score <= 100) {
    if (score >= 90){
        grade = "A"
    }
    if (score >= 80 && score < 90){
        grade = "B"
    }
    if (score >= 70 && score < 80){
        grade = "C"
    }
    if (score >= 60 && score < 70){
        grade = "D"
    }
    if (score < 60) {
        grade = "F"
    }

    if (score >= 60) {
        if (hasSubmittedAssignments == true){
            status = "Passed with all homework submitted."
        } else {
            status = "Passed, but missing homework penalty applies."
        }
    } else {
        if (score >= 50)  {
            status = "Failed, but eligible for a re-test."
        } else {
            status = "Failed completely. Must retake the course."
        }
    }
} else {
    status = "wrong number"
}

console.log("Score:" + score)
console.log("Grade:" + grade)
console.log("Satus:" + status)





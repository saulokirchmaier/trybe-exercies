let gradePorcentage = 95;
let gradeConceit;

if (gradePorcentage > 100 || gradePorcentage < 0) {
    gradeConceit = "Error, invalid number!"
} else if (gradePorcentage <= 100 && gradePorcentage >= 90) {
    gradeConceit = "A";
} else if (gradePorcentage < 90 && gradePorcentage >= 80) {
    gradeConceit = "B";
} else if (gradePorcentage < 80 && gradePorcentage >= 70) {
    gradeConceit = "C";
} else if (gradePorcentage < 70 && gradePorcentage >= 60) {
    gradeConceit = "D";
} else if (gradePorcentage < 60 && gradePorcentage >= 50) {
    gradeConceit = "E";
} else if (gradePorcentage < 50 && gradePorcentage >= 0) {
    gradeConceit = "F";
} 

console.log(gradeConceit);

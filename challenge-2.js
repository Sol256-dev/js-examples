let yob = prompt("enter your year of birth: ");

let currentYear = new Date().getFullYear();

let age = currentYear - yob;

function ageCalc() {
  if (age >= 18 && age <= 36) {
    console.log("Youth");
  }
  if (age < 18) {
    console.log("minor");
  }
  if (age > 36) {
    console.log("elderly");
  }
}
 
ageCalc();
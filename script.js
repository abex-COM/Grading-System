"use strict";
const gpa = document.querySelector(".gpa span");
const totaletc = document.querySelector(".totaletc span");

let totalECTS = 0;
let totalGradePoints = 0;

document.querySelector(".calculate").addEventListener("click", () => {
  const courseInputs = document.querySelectorAll("input");

  courseInputs.forEach((courseInput) => {
    const inputValue = courseInput.value;
    if (inputValue.includes("/")) {
      const [grade, credits] = inputValue.split("/");
      const ECTS = calculateCredit(credits);
      const gradePoints = calculateGradePoints(grade);
      totalECTS += ECTS;
      if (grade.length !== 0 && credits.length !== 0) {
        totalGradePoints += ECTS * gradePoints;
      }
    }
  });

  const calculatedGPA = totalGradePoints / totalECTS;

  gpa.textContent = calculatedGPA.toFixed(2);
  totaletc.textContent = totalECTS.toFixed(2);
});

function calculateCredit(credit) {
  let ECTS = 0;
  if (credit === "3") {
    ECTS = 5;
  } else if (credit === "4") {
    ECTS = 7;
  } else if (credit === "2") {
    ECTS = 4;
  }
  return ECTS;
}

function calculateGradePoints(grade) {
  let gradePoints = 0;
  if (grade === "A" || grade === "A+" || grade === "a+" || grade === "a") {
    gradePoints = 4;
  } else if (grade === "A-" || grade === "a-") {
    gradePoints = 3.75;
  } else if (grade === "B+" || grade === "b+") {
    gradePoints = 3.5;
  } else if (grade === "B" || grade === "b") {
    gradePoints = 3.0;
  } else if (grade === "B-" || grade === "b-") {
    gradePoints = 2.75;
  } else if (grade === "C+" || grade === "c+") {
    gradePoints = 2.5;
  } else if (grade === "C" || grade === "c") {
    gradePoints = 2.0;
  } else if (grade === "C-" || grade === "c-") {
    gradePoints = 1.75;
  } else if (grade === "D" || grade === "d") {
    gradePoints = 1;
  } else if (grade === "F") {
    gradePoints = 0;
  }
  return gradePoints;
}

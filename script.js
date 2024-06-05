"use strict";
const gpa = document.querySelector(".gpa span");

document.querySelector(".calculate").addEventListener("click", () => {
    let ETCS=0;
  let course1 = document.querySelector(".course1").value.split("/");
  let course3 = document.querySelector(".course1").value.split("/");
  let course4 = document.querySelector(".course1").value.split("/");
  let course5 = document.querySelector(".course1").value.split("/");
  let course2 = document.querySelector(".course1").value.split("/");
  let course6 = document.querySelector(".course1").value.split("/");
  let course7 = document.querySelector(".course1").value.split("/");

  let course1Chr = course1[1];
  let course2Chr = course2[1];
  let course3Chr = course3[1];
  let course4Chr = course4[1];
  let course5Chr = course5[1];
  let course6Chr = course6[1];
  let course7Chr = course7[1];

  let grade1 = course1[0];
  let grade2 = course2[0];
  let grade3 = course3[0];
  let grade4 = course4[0];
  let grade5 = course5[0];
  let grade6 = course6[0];
  let grade7 = course7[0];

  if (
    course1Chr ||
    course2Chr ||
    course3Chr ||
    course4Chr ||
    course5Chr ||
    course6Chr ||
    course7Chr == "3"
  ) {
    ETCS = 5;
  } else if (
    course1Chr ||
    course2Chr ||
    course3Chr ||
    course4Chr ||
    course5Chr ||
    course6Chr ||
    course7Chr == "4"
  ) {
    ETCS = 7;
  } else if (
    course1Chr ||
    course2Chr ||
    course3Chr ||
    course4Chr ||
    course5Chr ||
    course6Chr ||
    course7Chr == "5"
  ) {
    ETCS = 9;
  }
});

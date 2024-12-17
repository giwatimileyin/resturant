"use strict";

const yes = document.querySelectorAll(".yes");
// const resets = document.querySelector(".resets");

let score = 100;
yes.forEach(function (check) {
  check.addEventListener("change", function () {
    if (yes) {
      score--;
    } else {
      score++;
    }
  });
});

const result = document.querySelector(".results");
result.addEventListener("click", function () {
  document.querySelector(".score").textContent = score;
});

const reset = document.querySelector(".resets");
reset.addEventListener("click", function () {
  score = 100;
  yes.forEach(function (check) {
    check.checked = false;
  });
  document.querySelector(".score").textContent = score;
});

//
let score2 = 22;
yes.forEach(function (check) {
  check.addEventListener("change", function () {
    if (yes) {
      score2--;
    } else {
      score2++;
    }
  });
});

const result2 = document.querySelector(".one");
result2.addEventListener("click", function () {
  document.querySelector(".score2").textContent = score2;
});
// const reset1 = document.querySelector(".two");
// reset1.addEventListener("click", function () {
//   score = 22;
//   yes.forEach(function (check) {
//     check.checked = false;
//   });
//   document.querySelector(".score2").textContent = score2;
// });

//
const ses1 = document.querySelector(".ses1");
const closelog = document.querySelector(".s1i");
const showlog = document.querySelector(".show");

const show = function () {
  ses1.classList.remove("secs1");
};
const close = function () {
  ses1.classList.add("secs1");
};
showlog.addEventListener("click", show);

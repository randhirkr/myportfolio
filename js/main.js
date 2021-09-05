'use strict';

let yearSpanId = document.querySelector("#current-year")
const currentDate = new Date();
console.log(currentDate);

const currentYear = currentDate.getFullYear();
console.log(currentYear)
yearSpanId.innerHTML = currentYear;
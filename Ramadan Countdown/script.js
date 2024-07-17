var countdownContainer = document.querySelector(".countdown-container");
var monthsSpan = document.querySelector("#months");
// var daysSpan = document.querySelector('#days');
var hoursSpan = document.querySelector("#hours");
var minutesSpan = document.querySelector("#minutes");
var secondsSpan = document.querySelector("#seconds");

var ramadanDate = new Date("March 1, 2025 00:00:00");

function updateCountdown() {
  var now = new Date();
  var timeDiff = ramadanDate.getTime() - now.getTime();
  var months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
  // var days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  monthsSpan.textContent = months;
  // daysSpan.textContent = days;
  hoursSpan.textContent = hours;
  minutesSpan.textContent = minutes;
  secondsSpan.textContent = seconds;
}

setInterval(updateCountdown, 1000);

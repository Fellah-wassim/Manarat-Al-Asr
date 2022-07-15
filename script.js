setInterval(displayClock, 500);
function displayClock() {
  var time = new Date();
  var hours = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();
  if (hours > 12) {
    hours = hours - 12;
  }
  if (hours == 0) {
    hours = 12;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  document.getElementById("clock").innerHTML = hours + ":" + min + ":" + sec;
}

setInterval(displayDate, 500);
function displayDate() {
  var time = new Date();
  var day = time.getDate();
  var month = time.getMonth() + 1;
  var year = time.getFullYear();
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  document.getElementById("date").innerHTML = month + "/" + day + "/" + year;
}

var btn1 = document.getElementById("full-screen");
var el = document.documentElement;
btn1.addEventListener("click", () => {
  if (el.requestFullscreen) {
    el.requestFullscreen();
  }
});
btn1.addEventListener("click", () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
});
function menuToggler() {
  const toggleMenu = document.querySelector(".menu");
  toggleMenu.classList.toggle("active");
}
function searchButton() {
  const searchBtn = document.querySelector(".divv");
  searchBtn.classList.toggle("active");
}

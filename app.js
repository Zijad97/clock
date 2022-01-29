"use strict";
const numbers = document.querySelectorAll(".number");
numbers.forEach((number, idx) => {
  number.style.setProperty("--rotation", `${(idx + 1) * 30}deg`);
});
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
function clock() {
  const currentDate = new Date();
  const secondsFraction = currentDate.getSeconds() / 60;
  /*
  fraction of current second within a full minute(if for eg fraction=0.5 ie 30 seconds the hand will rotate 0.5 * 360deg=180deg)
  */
  const minutesFraction = (secondsFraction + currentDate.getMinutes()) / 60;
  /*
   * fraction of current minute plus added seconds within a full hour (fraction=0.25 ie 15 minutes rotation=0.25 * 360deg=90deg)
   */
  const hoursFraction = (minutesFraction + currentDate.getHours()) / 12;
  /*
  fraction of current hour plus added minutes within a 12 hour interval,if GetHours gives us for eg 18 the fraction will  be 1.5 and rotation=1.5 * 360deg=540deg=180deg
*/
  rotate(second, secondsFraction);
  rotate(minute, minutesFraction);
  rotate(hour, hoursFraction);
}
function rotate(hand, fraction) {
  hand.style.setProperty("--rotation", `${fraction * 360}deg`);
}
clock();
setInterval(clock, 1000);

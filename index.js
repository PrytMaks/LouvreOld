const progress = document.querySelector(".video__control_time-bar");
const soundProg = document.querySelector(".video__control_sound-bar");

progress.addEventListener("input", function () {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #24809E 0%, #24809E ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
});

soundProg.addEventListener("input", function () {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #24809E 0%, #24809E ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
});

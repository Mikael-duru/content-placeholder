const header = document.querySelector("#header");
const title = document.querySelector("#title");
const paragraph = document.querySelector("#paragraph");
const profileImg = document.querySelector("#profileImg");
const username = document.querySelector("#name");
const date = document.querySelector("#date");
const animatedBgs = document.querySelectorAll(".animated-bg");
const animatedBgTexts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData(){
  header.innerHTML = '<img src="/test-bg.jpg" alt="workstation setup">';
  title.textContent = 'Lorem ipsum dolor sit amet.';
  paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, magnam!';
  profileImg.innerHTML = '<img src="/linkedIn-pic2.jpg" alt="Duru Mykael">';
  username.textContent = 'Duru Mykael';
  date.textContent = 'March 24, 2023';

  animatedBgs.forEach(animatedBg => animatedBg.classList.remove("animated-bg"));
  animatedBgTexts.forEach(animatedBgText => animatedBgText.classList.remove("animated-bg-text"));
}
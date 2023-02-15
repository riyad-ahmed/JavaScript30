// dram javascript

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName != 'transform') return;
  this .classList.remove('playing');
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  return key.addEventListener('transitionend', removeTransition)
});

window.addEventListener('keydown',playSound);


// clock javascript
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate (){
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
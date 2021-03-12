const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.second-hand');

const getTime = () => {
  const now = new Date();
  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  const hoursDegrees = ((hour / 12) * 360) + 90;
  const minsDegrees = ((min / 60) * 360) + 90;
  const secondsDegrees = ((sec / 60) * 360) + 90;

  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;
  secHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

const init = () => {
  setInterval(getTime, 1000);
}

init();
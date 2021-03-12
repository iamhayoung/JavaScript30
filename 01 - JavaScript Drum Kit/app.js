const audios = document.querySelectorAll('audio');
const btns = document.querySelectorAll('.key');

const toggleClass = (num) => {
  btns.forEach((btn) => {
    const btnKey = btn.dataset.key;

    if (btnKey === num) {
      btn.classList.toggle('playing')
    } else {
      return;
    }
  })
}

const playSound = (key) => {
  const pressedKey = String(key);
  audios.forEach((audio) => {
    const audioNum = audio.dataset.key;

    if (pressedKey === audioNum) {
      audio.currentTime = 0;
      audio.play();
      toggleClass(audioNum);
    } else {
      return;
    }
  })
}

const init = () => {
  document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
      case 65:
        playSound(e.keyCode);
        break;
      case 83:
        playSound(e.keyCode);
        break;
      case 68:
        playSound(e.keyCode);
        break;
      case 70:
        playSound(e.keyCode);
        break;
      case 71:
        playSound(e.keyCode);
        break;
      case 72:
        playSound(e.keyCode);
        break;
      case 74:
        playSound(e.keyCode);
        break;
      case 75:
        playSound(e.keyCode);
        break;
      case 76:
        playSound(e.keyCode);
        break;
      default:
        alert('press the right key');
        break;
    }
  })
}

init();
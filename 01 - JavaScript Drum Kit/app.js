const audios = document.querySelectorAll('audio');

const playSound = (key) => {
  const pressedKey = String(key);
  audios.forEach((audio) => {
    const audioNum = audio.dataset.key;

    if (pressedKey === audioNum) {
      audio.play();

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
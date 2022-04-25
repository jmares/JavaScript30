function playSound(e) {
    // console.log(e.keyCode + " " + e.code + " " + e.altKey + " " + e.charCode + " " + e.key);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return // stop function from running
    audio.currentTime = 0; // rewind to the start;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip it if it is not a transform
    // console.log(e);
    // console.log(this);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);


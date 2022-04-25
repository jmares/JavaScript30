/**
 * Declarations
 */
 const keys = document.querySelectorAll('.key');
 keys.forEach(key => key.addEventListener('transitionend', removeTransition));
 

/**
 * Remove the transition (class playing) after the transform, last transition, has finished
 */
 function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip it if it is not a transform
    // e : the event
    // this : the object on which the event occured
    this.classList.remove('playing');
}


/**
 * Play the sound corresponding to the key pressed
 */
 function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`)
    const key = document.querySelector(`.key[data-key="${e.key}"]`)
    if (!audio) return // stop function from running
    audio.currentTime = 0; // rewind to the start, so you don't have to wait for the sound to finish;
    audio.play();
    key.classList.add('playing');
}


/**
 * Main code
 */

window.addEventListener('keydown', playSound);


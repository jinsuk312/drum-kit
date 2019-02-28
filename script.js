function playSound(e){
        // grab keycodes for letters using console.log to find for each letter or http://keycode.info/
        // match the audio(LINE 50-58) with data-key with matching keycode
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
        // stop function from running all togerther
        if (!audio) return;
        // rewind to the start, allows successive playing of audio
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
}

function removeTransition(e) {
    // console.log(e);
    // skip if its not a transform
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
// console.log(keys);
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound);
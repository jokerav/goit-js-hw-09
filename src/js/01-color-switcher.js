const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

btnStop.setAttribute('disabled', true);
btnStart.addEventListener('click', onStart);

function onStart() {
    changeBackgroundColor();
    timer = setInterval(changeBackgroundColor, 1000);
    btnStart.setAttribute('disabled', true);
    btnStop.removeAttribute('disabled');
    btnStop.addEventListener('click', onStop);
    brnStart.removeEventListener('click', onStart);
}

function onStop() {
    clearInterval(timer);
    btnStop.setAttribute('disabled', true);
    btnStart.removeAttribute('disabled');
    btnStart.addEventListener('click', onStart);
    btnStop.removeEventListener('click', onStop);
}
function changeBackgroundColor() {
    const currentColor = getRandomHexColor();
    document.body.style.backgroundColor = currentColor;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

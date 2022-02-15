import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

const inputCalendar = document.querySelector('#datetime-picker');
const daysRef = document.querySelector('span[data-days]');
const hoursRef = document.querySelector('span[data-hours]');
const minutesRef = document.querySelector('span[data-minutes]');
const secondsRef = document.querySelector('span[data-seconds]');

const btnStart = document.querySelector('button[data-start]');
btnStart.setAttribute('disabled', true);

let futureDate = 0;

const timer = {
    intervalID: null,
    isActive: false,
    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        inputCalendar.disabled = true;
        this.intervalID = setInterval(() => {
            const deltaTime = futureDate - Date.now();
            updeteUI(convertMs(deltaTime));
            if (deltaTime <= 1000) {
                this.stop();
            }
        }, 1000);
    },
    stop() {
        clearInterval(this.intervalID);
        Notiflix.Notify.success(' The pizza party starts right now!');
        inputCalendar.disabled = false;
    },
};

flatpickr('#datetime-picker', {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        onDateSelect(selectedDates[0]);
    },
});

function onDateSelect(date) {
    futureDate = date.getTime();
    if (futureDate < Date.now()) {
        Notiflix.Notify.failure('Please choose a date in the future');
        return;
    }
    btnStart.removeAttribute('disabled');
    btnStart.addEventListener('click', onStartClick);
}
function onStartClick() {
    timer.start();
}
function updeteUI(time) {
    const { days, hours, minutes, seconds } = time;
    daysRef.textContent = days;
    hoursRef.textContent = pad(hours);
    minutesRef.textContent = pad(minutes);
    secondsRef.textContent = pad(seconds);
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function pad(value) {
    return String(value).padStart(2, '0');
}

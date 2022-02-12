import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const daysRef = document.querySelector('span[data-days]');
const hoursRef = document.querySelector('span[data-hours]');
const minutesRef = document.querySelector('span[data-minutes]');
const secondsRef = document.querySelector('span[data-seconds]');

const btnStart = document.querySelector('button[data-start]');
btnStart.setAttribute('disabled', true);

flatpickr('#datetime-picker', {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        //console.log(selectedDates[0]);
        onDateSelect(selectedDates[0]);
    },
});

function onDateSelect(date) {
    if (date.getTime() < Date.now()) {
        window.alert('Please choose a date in the future');
        return;
    }
    btnStart.removeAttribute('disabled');
    btnStart.addEventListener('click', onStart(date));
}

function onStart(date) {
    const timer = setInterval(updeteUI(date), 1000);
}
function updeteUI(date) {
    const { days, hours, minutes, seconds } = convertMs(date.getTime() - Date.now());
    daysRef.textContent = days;
    hoursRef.textContent = hours;
    minutesRef.textContent = minutes;
    secondsRef.textContent = seconds;
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

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

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
}

import Notiflix from 'notiflix';
const btnCreatePromise = document.querySelector('button[type="submit"]');
const inputFirstDelay = document.querySelector('input[name="delay"]');
const inputStep = document.querySelector('input[name="step"]');
const inputAmount = document.querySelector('input[name="amount"]');

btnCreatePromise.addEventListener('click', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    const firstDelay = inputFirstDelay.valueAsNumber;
    const step = inputStep.valueAsNumber;
    const amount = inputAmount.valueAsNumber;
    createPromise(1, firstDelay);
    let timerCount = step;
    if (amount > 1) {
        for (let i = 2; i <= amount; i += 1) {
            createPromise(i, timerCount + firstDelay);
            timerCount += step;
        }
    }
}

function createPromise(position, delay) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldResolve = Math.random() > 0.3;
            if (shouldResolve) {
                Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
            } else {
                Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
            }
        }, delay);
    });
}

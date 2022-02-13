const btnCreatePromise = document.querySelector('button[type="submit"]');
const inputFirstDelay = document.querySelector('input[name="delay"]');
const inputStep = document.querySelector('input[name="step"]');
const inputAmount = document.querySelector('input[name="amount"]');
btnCreatePromise.addEventListener('click', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    const firstDelay = inputFirstDelay.value;
    const step = inputStep.value;
    const amount = inputAmount.value;
    console.log(firstDelay, step, amount);
    createPromise(1, firstDelay);
}

function createPromise(position, delay) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldResolve = Math.random() > 0.3;
            if (shouldResolve) {
                resolve('Success! Value passed to resolve function');
            } else {
                reject('Error! Error passed to reject function');
            }
        }, delay);
    });
}

const btnCreatePromise = document.querySelector('button[type="submit"]');
const inputFirstDelay = document.querySelector('input[name="delay"]');
const inputStep = document.querySelector('input[name="step"]');
const inputAmount = document.querySelector('input[name="amount"]');
console.log(inputAmount);

function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
        // Fulfill
    } else {
        // Reject
    }
}

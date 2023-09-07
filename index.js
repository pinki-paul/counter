let counter = 0;

const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetValue = document.getElementById('reset-value');
const resetBtn = document.getElementById('reset-btn');


incrementBtn.addEventListener('click', () => {
    counter++;
    resetValue.innerHTML = counter;
});

decrementBtn.addEventListener('click', () => {
    counter--;
    resetValue.innerHTML = counter;
});

resetBtn.addEventListener('click', () => {
    resetValue.innerHTML = '0';
})
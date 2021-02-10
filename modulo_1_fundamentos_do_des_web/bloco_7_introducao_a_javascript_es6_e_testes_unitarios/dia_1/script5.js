const incrementButton = document.querySelector('#increment-button');
let clickCount = 0;
const counter = document.querySelector('#counter');
counter.innerText = clickCount;

incrementButton.addEventListener('click', () => {
    clickCount += 1;
    counter.innerText = clickCount;
});
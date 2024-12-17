function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bntEl = document.querySelector('.change-color');
console.log(bntEl);
const spanColor = document.querySelector('.color');
console.dir(spanColor);
const bodyAmount = document.querySelector('.body-amount');
console.log(bodyAmount);

bntEl.addEventListener('click', event => {
  const RandomColor = getRandomHexColor();
  bodyAmount.style.backgroundColor = RandomColor;
  spanColor.textContent = RandomColor;


});



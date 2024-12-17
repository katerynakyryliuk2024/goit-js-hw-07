function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bntEl = document.querySelector('.change-color');
console.log(bntEl);
const spanColor = document.querySelector('.color');
console.dir( spanColor);

bntEl.addEventListener('click', event => {
  spanColor.style.backgroundcolor = getRandomHexColor();
});


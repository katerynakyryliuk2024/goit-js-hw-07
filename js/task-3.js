const fildEl = document.querySelector('#name-input');

const nameInfo = document.querySelector('#name-output');

fildEl.addEventListener('input', () => {
  const inputValue = fildEl.value.trim();

  if (inputValue.length === 0) {
   nameInfo.textContent ='Anonymous'; 
  
} else {
   nameInfo.textContent = inputValue;
}

 });




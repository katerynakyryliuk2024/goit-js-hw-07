const fildEl = document.querySelector('#name-input');

const nameInfo = document.querySelector('#name-output');

fildEl.addEventListener('input', () => {
  if (fildEl.value = 0) {
    console.log(`Hello, ${nameInfo}`); 
  
} else {
   console.log(`Hello, ${fildEl.value}`);
}

 });




const formEl = document.querySelector('.login-form');
console.dir(formEl);
formEl.addEventListener('submit', event => {
    event.preventDefault();

    const email = formEl.elements.email.name;
    const password = formEl.elements.password.name;

    const formData = {
       
        [email]: formEl.elements.email.value,
        [password]: formEl.elements.password.value,
    };

    if (formEl.elements.email.value === '' || formEl.elements.password.value === '') {
    return alert('All form fields must be filled in');
    
}

    console.log(`email: ${formEl.elements.email.value}, password: ${formEl.elements.password.value}`);
    
    formEl.reset();
});


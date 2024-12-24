const formEl = document.querySelector('.login-form');
console.dir(formEl);
formEl.addEventListener('submit', event => {
    event.preventDefault();

        if (formEl.elements.email.value === '' || formEl.elements.password.value === '') {
    return alert('All form fields must be filled in');
    
}

    const email = formEl.elements.email.name;
    const password = formEl.elements.password.name;

    const formData = {
       
        email: formEl.elements.email.value,
        password: formEl.elements.password.value,
    };

console.log(formData);

    
    formEl.reset();
});


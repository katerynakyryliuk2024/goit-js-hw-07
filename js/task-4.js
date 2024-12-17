const formEl = document.querySelector('.login-form');
console.dir(formEl);
formEl.addEventListener('submit', event => {
    event.preventDefault();

    const email = formEl.elements.email.value;
    const password = formEl.elements.password.value;

    const formData = {
       
        [email]: formEl.elements.email.value,
        [password]: formEl.elements.password.value,
    };

    if (email === '' || password === '') {
    return alert('All form fields must be filled in');
    
}

    console.log(`email: ${email}, password: ${password}`);
    
    formEl.reset();
});


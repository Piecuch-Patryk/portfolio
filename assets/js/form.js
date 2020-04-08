const form = document.getElementById('form');
form.addEventListener('submit', submitFormValidate);

const inputs = document.querySelectorAll('.form-input');
inputs.forEach((el, i) => el.addEventListener('keyup', formValidate));


function submitFormValidate(e) {
    const formData = new FormData(this);
    const inputElements = document.querySelectorAll('input.form-input');
    let flag = true;
    e.preventDefault();

    inputElements.forEach((el, i) => {
        if(el.value === '') {
            document.getElementById('info-required').classList.add('warning');
            flag = false;
        }
    });
    if (flag && validateName(inputElements[0]) && validateEmail(inputElements[1])) sendEmail(formData);
}

function formValidate() {
    switch(this.name) {
        case 'name':
            validateName(this);
            break;
        case 'email':
            validateEmail(this);
            break;
    }
}

/*
*   validations
*/
const validateName = that => {
    const regex = /^[a-zA-Z\s]*$/;
    const lettersOnly = regex.test(that.value);

    toggleFormErrors(that, lettersOnly);    
    return lettersOnly;
}

const validateEmail = that => {
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const validEmail = regex.test(that.value);

    toggleFormErrors(that, validEmail);
    return validEmail;
}


/*
*   toggles
*/

function toggleFormErrors(that, bool) {
    const inputClass = 'input-error';
    const errorClass = 'error';
    const hasClass = that.classList.contains(inputClass);

    if(!hasClass){
        if(!bool) {
            that.classList.add(inputClass);
            that.nextElementSibling.classList.add(errorClass);
        }
    }else {
        if(bool) {
            that.classList.remove(inputClass);
            that.nextElementSibling.classList.remove(errorClass);
        }
    }
}

function toggleSpinner() {
    document.getElementById('spinner').classList.contains('hidden') ? spinner.classList.remove('hidden') : spinner.classList.add('hidden');
}

function toggleError() {
    document.getElementById('form-error').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('form-error').classList.add('hidden');
    }, 2000);
}

function toggleConfirmation() {
    document.getElementById('confirmation').classList.remove('hidden');
    resetForm();
    setTimeout(() => {
        document.getElementById('confirmation').classList.add('hidden');
    }, 4000);
}

/*
*   reset
*/
const resetForm = () => document.querySelectorAll('.form-input').forEach(el => el.value = '');

/*
*   send
*/
function sendEmail(formData){
    const url = 'app/app.php';
    toggleSpinner();
    
    fetch(url, {
        method: 'post',
        body: formData,
    })
    .then(response => response.text())
    .then(response => {
        toggleSpinner();
        response === 'true' ? toggleConfirmation() : toggleError();
    })
    .catch(error => console.error(error));
}
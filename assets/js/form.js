const form = document.getElementById('form');
form.addEventListener('submit', formValidate);

const inputs = document.querySelectorAll('.form-input');
inputs.forEach((el, i) => el.addEventListener('keyup', formValidate));

function formValidate(e) {
    switch(this.name) {
        case 'name':
            validateName(this);
            break;
        case 'email':
            validateEmail(this);
            break;
    }
    // const formData = new FormData(this);
    // e.preventDefault();

    // sendEmail();
}

/*
*   validations
*/
const validateName = that => {
    const inputClass = 'input-error';
    const errorClass = 'error';
    const hasClass = that.classList.contains(inputClass);
    const  regex = /^[a-zA-Z\s]*$/;
    const lettersOnly = regex.test(that.value);

    if(!hasClass){
        if(!lettersOnly) {
            that.classList.add(inputClass);
            that.nextElementSibling.classList.add(errorClass);
        }
    }else {
        if(lettersOnly) {
            that.classList.remove(inputClass);
            that.nextElementSibling.classList.remove(errorClass);
        }
    }
}

const validateEmail = that => {

}


/*
*   toggles
*/

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
    setTimeout(() => {
        document.getElementById('confirmation').classList.add('hidden');
    }, 4000);
}

/*
*   send
*/
function sendEmail(){
    const url = 'app/app.php';
    toggleSpinner();
    
    fetch(url, {
        method: 'post',
        body: formData,
    })
    .then(response => response.text())
    .then(response => {
        toggleSpinner();
        response == true ? toggleConfirmation() : toggleError();
    })
    .catch(error => console.error(error));
}
const form = document.getElementById('form');
form.addEventListener('submit', sendEmail);

function toggleSpinner() {
    document.getElementById('spinner').classList.contains('hidden') ? spinner.classList.remove('hidden') : spinner.classList.add('hidden');
}

function displayError() {
    document.getElementById('error').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('error').classList.add('hidden');
    }, 2000);
}

function toggleConfirmation() {
    document.getElementById('confirmation').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('confirmation').classList.add('hidden');
    }, 2000);
}

function sendEmail(e){
    const formData = new FormData(this);
    const url = 'app/app.php';
    e.preventDefault();

    toggleSpinner();
    
    fetch(url, {
        method: 'post',
        body: formData,
    })
    .then(response => response.text())
    .then(response => {
        toggleSpinner();
        response ? toggleConfirmation() : displayError();
    })
    .catch(error => console.error(error));
}

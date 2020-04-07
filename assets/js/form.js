const form = document.getElementById('form');
form.addEventListener('submit', sendEmail);

function sendEmail(e){
    const formData = new FormData(this);
    const url = 'app/app.php';
    e.preventDefault();

    fetch(url, {
        method: 'post',
        body: formData,
    })
    .then(response => response.text())
    .then(response => console.log(response))
    .catch(error => console.error(error));
}

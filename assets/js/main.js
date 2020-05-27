/*
*   Form Validate
*/
let errors = {};

function formValidate(formData) {
    errors = {};
    // name
    if (formData.name.length == 0) errors.e_name = 'Proszę podać imię.';
    else if (!formData.name.match(/^[-\sa-zA-Z]+$/)) errors.e_name = 'Imię może zawierać tylko litery.';

    // email
    if (formData.email.length == 0) errors.e_email = 'Proszę podać adres email.';
    else if (!formData.email.match(/\S+@\S+\.\S+/)) errors.e_email = 'Adres email jest nieprawidłowy.';

    // body
    if (formData.body.length == 0) errors.e_body = 'Wiadomość nie może być pusta.';

    if (Object.keys(errors).length > 0) return false;
    else return true;
}

/*
*   Form error
*/
function toggleErrorMsg() {
    const e_fields = [
        'e_name', 'e_email', 'e_body',
    ];
    $(e_fields).each((i, el) => {
        if (errors[el]) $(`#${el}`).html(errors[el]);
        else $(`#${el}`).html('');
    });
}

/*
*   Hide info message
*/
function hideInfoMsg() {
    const toHide = [
        'form-error', 'form-success',
    ];

    $(toHide).each((i, el) => $(`#${el}`).fadeOut(300));
}


/*
*   Sending error
*/
function sendingError() {
    $('#form-error').fadeIn(300);
}

/*
*   Sending success
*/
function sendingSuccess() {
    const fields = [
        "input[name='name']", "input[name='email']", "textarea[name='body']",
    ];

    $(fields).each((i, el) => $(el).val(''));
    $('#form-success').fadeIn(300);
}
/*
*   Form submit
*/
function submitForm(e) {
    e.preventDefault();
    const formData = {
        name: $('input[name=name]').val(),
        email: $('input[name=email]').val(),
        body: $('textarea[name=body]').val(),
    }
    const isValid = formValidate(formData);
    if (!isValid) toggleErrorMsg();
    else {
        toggleErrorMsg()
        $.ajax({
            url: 'App/app.php',
            method: 'post',
            contentType: "json",
            data: formData,
            error: () => sendingError(),
            success: () => sendingSuccess(),
        });
    }
}


/*
*   Scroll
*/
function scroll(e) {
    const anchor = $(this).attr('href').split('#')[1];
    const destination = $(`#${anchor}`).offset().top;
    const $isThisBtn = $(this).attr('data-link-btn');
    let scrollVal;

    if (anchor === 'header') scrollVal = 0;
    else scrollVal = destination;

    if (!$isThisBtn) toggleNavigation();
    e.preventDefault();
    
    $('html, body').animate({
        scrollTop: `${scrollVal}px`,
    }, 500);
}

/*
*   Toggle navigation
*/
function toggleNavigation() {
    const $nav = $('div[data-nav=drop]');
    const $closeBtn = $('button[data-btn=close]');

    if (!$($nav).hasClass('show')) {
        $($closeBtn).addClass('spin');
        $($closeBtn).on('animationend', () => $($closeBtn).removeClass('spin'));
    }else {
        if ($($closeBtn).hasClass('spin')) $($closeBtn).removeClass('spin');
    }
    $($nav).toggleClass('show');
}

/*
*   Toggle modal
*/
function toggleModal() {
    const $modal = $(this).attr('data-modal-id');
    $(`#${$modal}`).toggleClass('show');
}


/*
*   DOM loaded
*/
$(document).ready(() => {
    // Form submit
    $('#contact-form').on('submit', submitForm);

    // Scroll
    $('[data-link=true]').each((i, el) => $(el).on('click', scroll));

    // Modal
    $('button[data-modal=toggle]').each((i, el) => $(el).on('click', toggleModal));
    
    // Navigation
    $('button[data-nav=toggle]').each((i, el) => $(el).on('click', toggleNavigation));
});

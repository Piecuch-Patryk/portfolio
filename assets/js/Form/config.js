export const ID = {
    form: 'form',
    btnSubmit: 'btn-submit',
    errorEmptyFields: 'info-required',
    spinner: 'spinner',
    errorForm: 'form-error',
    confirmation: 'confirmation',
    errorName: 'error-name',
    errorEmail: 'error-email',
}

export const CSSclasses = {
    input: 'form-input',
    hidden: 'hidden',
    errorTyping: 'input-error',
    errorInputmessage: 'error',
    errorEmptyField: 'warning',
    errorSubmit: 'form-error',
}

export const inputsName = {
    name: 'name',
    email: 'email',
}

export const DOMelements = {
    form: document.getElementById(ID.form),
    fields: document.querySelectorAll(`.${CSSclasses.input}`),
    inputs: document.querySelectorAll(`input.${CSSclasses.input}`),
    submitBtn: document.getElementById(ID.btnSubmit),
    spinner: document.getElementById(ID.spinner),
    errorEmptyFields: document.getElementById(ID.errorEmptyFields),
    errorName: document.getElementById(ID.errorName),
    errorEmail: document.getElementById(ID.errorEmail),
    confirmation: document.getElementById(ID.confirmation),
    errorForm: document.getElementById(ID.errorForm),
}

export const regex = {
    name: /^[a-zA-Z\s]*$/,
    email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
}

export const timeouts = {
    confirmation: 4000,
    error: 2000,
}
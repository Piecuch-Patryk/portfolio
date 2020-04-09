import * as assets from '../config.js';
import Output from './Output.js';


export default class Form {

    constructor() {
        this.output = new Output();
    }

    validateName(that) {
        if((that.value !== '') && (assets.regex.name.test(that.value))) return true;
        else return false;
    }

    validateEmail(that) {
        if((that.value !== '') && (assets.regex.email.test(that.value))) return true;
        else return false;
    }

    validateBody() {
        if(this.value !== '') return true;
        else return false;
    }

    createFormData() {
        const data = {};
        assets.DOMelements.fields.forEach(el => data[el.name] = el.value);
        return data;
    }

    validateOnChange = e => {
        const current = e.currentTarget;
        let passed;
        switch(current.name) {
            case assets.inputsName.name:
                passed = this.validateName(current);
                break;
                case assets.inputsName.email:
                passed = this.validateEmail(current);
                break;
        }
        this.output.toggleFormErrors(current, passed);
    }

    submit = () => {
        const inputs = assets.DOMelements.inputs;
        let flag = true;

        assets.DOMelements.fields.forEach(el => {
            if(el.value === '') {
                assets.DOMelements.errorEmptyFields.classList.add(assets.CSSclasses.errorEmptyField);
                flag = false;
            }
        });
        if (flag && this.validateName(inputs[0]) && this.validateEmail(inputs[1])) this.sendEmail();
    }

    sendEmail = () => {
        const data = this.createFormData();
        const url = 'app/app.php';
        this.output.toggleSpinner();

        fetch(url, {
            method: 'post',
            body: JSON.stringify(data),
        })
        .then(response => response.text())
        .then(response => {
            this.output.toggleSpinner();

            console.log(response);
            

            if(response === 'true') {
                this.output.toggleConfirmation();
                this.resetForm();
            } else this.output.toggleError();
        })
        // .catch(() => this.output.toggleError());
        .catch(error => console.error(error));
    }

    resetForm = () => assets.DOMelements.fields.forEach(el => el.value = '');
    
    preventSubmit = e => {
        e.preventDefault();
        this.submit();
    }
}
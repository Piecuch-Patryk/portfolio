import * as assets from '../config.js';

export default class Output {

    constructor() {
        this.spinner = assets.DOMelements.spinner;
    }

    toggleFormErrors(current, bool) {
        if(!current.classList.contains(assets.CSSclasses.errorTyping)){
            if(!bool) current.classList.add(assets.CSSclasses.errorTyping);
        }else {
            if(bool) current.classList.remove(assets.CSSclasses.errorTyping);
        }
    }

    toggleSpinner = () => {
        this.spinner.classList.contains(assets.CSSclasses.hidden) ?
        this.spinner.classList.remove(assets.CSSclasses.hidden) : 
        this.spinner.classList.add(assets.CSSclasses.hidden);
    }

    toggleConfirmation() {
        assets.DOMelements.confirmation.classList.remove(assets.CSSclasses.hidden);
        setTimeout(() => {
            assets.DOMelements.confirmation.classList.add(assets.CSSclasses.hidden);
        }, assets.timeouts.confirmation);
    }
    
    toggleError() {
        assets.DOMelements.errorForm.classList.remove(assets.CSSclasses.hidden);
        setTimeout(() => {
            assets.DOMelements.errorForm.classList.add(assets.CSSclasses.hidden);
        }, assets.timeouts.error);
    }
}
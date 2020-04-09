import * as assets from './config.js';
import Form from './modules/Form.js';




const form = new Form();

assets.DOMelements.fields.forEach((el, i) => el.addEventListener('keyup', form.validateOnChange));

assets.DOMelements.form.addEventListener('submit', form.preventSubmit);
import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'page-radio',
  templateUrl: 'radio.html',
})
export class RadioPage {
  langs;
  langForm;

  constructor() {
    this.langForm = new FormGroup({
      "langs": new FormControl({value: 'rust', disabled: false})
    });
  }

  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }
}
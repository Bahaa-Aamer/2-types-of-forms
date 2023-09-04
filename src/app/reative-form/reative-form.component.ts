import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  Form,
  FormControl,
  FormGroup,
  NgControl,
  Validators,
  ValidationErrors,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
@Component({
  selector: 'app-reative-form',
  templateUrl: './reative-form.component.html',
  styleUrls: ['./reative-form.component.css'],
})
export class ReativeFormComponent implements OnInit {
  form: FormGroup;
  passwordConfirm: any;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(null, [Validators.required, this.noSpace]),
      lastName: new FormControl(null, [Validators.required, this.noSpace]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      passwordConfirm: new FormControl(null, [
        Validators.required,
        this.checkPass.bind(this),
      ]),
    });
  }
  submit() {}

  noSpace(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { noSpace: true };
    }
    return null;
  }

  checkPass(control: FormControl) {
    const password = control.root.get('password');
    if (password !== null && control.value !== password.value) {
      return { passwordMissmatch: true };
    } else {
      return null;
    }
  }
}

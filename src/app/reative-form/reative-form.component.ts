import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ControlValueAccessor,
  Form,
  FormControl,
  FormGroup,
  NgControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reative-form',
  templateUrl: './reative-form.component.html',
  styleUrls: ['./reative-form.component.css'],
})
export class ReativeFormComponent implements OnInit {
  password: any;
  passwordConf: any;
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      passwordConfirm: new FormControl(null, [Validators.required]),
    });
  }
  submit() {
    console.log(this.form);
  }
}

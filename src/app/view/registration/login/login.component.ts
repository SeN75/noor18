import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistraionService } from 'src/app/_services/registraion.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.formBuilder.group({
    email: ['dev.alqarni@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', Validators.required]
  });
  constructor(private registrationSrv: RegistraionService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  login() {
    if (this.loginForm.invalid) {
      return console.log(this.loginForm)
    }
    else {
      console.log('login');
      this.registrationSrv.login(this.loginForm.value)
    }
  }
}

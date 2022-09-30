import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { UserLoginService } from 'src/app/user-login.service';
import { StepService } from '../step.service';

@Component({
  selector: 'app-step-login',
  templateUrl: './step-login.component.html',
  styleUrls: ['./step-login.component.css'],
})
export class StepLoginComponent implements OnInit {
  faUser = faUser;
  loginForm: FormGroup;

  constructor(
    private stepService: StepService,
    private userLoginService: UserLoginService
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  login() {
    if (this.loginForm.valid) {
      let obj = {
        username: this.loginForm.get('username')?.value,
        password: this.loginForm.get('password')?.value,
      };
      this.stepService.isValidUser(obj).subscribe((isValid: boolean) => {
        if (isValid) {
          this.userLoginService.logIn(obj.username);
          localStorage.setItem('username', obj.username);
          window.location.href = '/base-2';
        } else {
          alert('Invalid user');
        }
      });
    } else {
      alert('Please enter all details!');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { NgoLoginService } from 'src/app/services/ngo-login.service';
import { UserLoginService } from 'src/app/user-login.service';
import { NgoService } from '../../services/ngo.service';

@Component({
  selector: 'app-ngo-login',
  templateUrl: './ngo-login.component.html',
  styleUrls: ['./ngo-login.component.css'],
})
export class NgoLoginComponent implements OnInit {
  faUser = faUser;
  loginForm: FormGroup;

  constructor(
    private userLoginService: UserLoginService,
    private ngoService: NgoService
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

      this.ngoService.ngoLogin(obj).subscribe((isValid) => {
        if (isValid) {
          localStorage.setItem('username', obj.username);
          window.location.href = '/base-3';
        } else {
          alert('Invalid username/password');
        }
      });
    } else {
      alert('Please Enter the data');
    }
  }
}

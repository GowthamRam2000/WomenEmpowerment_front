import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { UserLoginService } from 'src/app/user-login.service';
import { Admin } from '../model/admin.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  faUser = faUser;
  loginForm: FormGroup;

  constructor(
    private userLoginService: UserLoginService,
    private adminService: AdminService
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  login() {
    if (this.loginForm.valid) {
      let obj: Admin = {
        username: this.loginForm.get('username')?.value,
        password: this.loginForm.get('password')?.value,
      };

      this.adminService.login(obj).subscribe((isValid: boolean) => {
        if (isValid) {
          this.adminService.setLogin(obj.username);
          window.location.href = '/admin-dashboard';
        } else {
          alert('Invalid Username/password');
        }
      });
    } else {
      alert('Please enter entire data');
    }
  }
}

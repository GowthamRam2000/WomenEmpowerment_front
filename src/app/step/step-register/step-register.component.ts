import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UrlSegment } from '@angular/router';
import {
  faCircleCheck,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { StepService } from '../step.service';
import { User } from '../user.model';

@Component({
  selector: 'app-step-register',
  templateUrl: './step-register.component.html',
  styleUrls: ['./step-register.component.css'],
})
export class StepRegisterComponent implements OnInit {
  faCircleCheck = faCircleCheck;
  faCircleXmark = faCircleXmark;
  regForm: FormGroup;

  isTouched: Array<Boolean>;
  isValid: Array<Boolean>;
  @ViewChild('fname', { static: true }) fnameTF: ElementRef;
  @ViewChild('lname', { static: true }) lnameTF: ElementRef;
  @ViewChild('username', { static: true }) usernameTF: ElementRef;
  @ViewChild('dob', { static: true }) dobTF: ElementRef;
  @ViewChild('password', { static: true }) passTF: ElementRef;
  @ViewChild('confPass', { static: true }) confPassTF: ElementRef;
  @ViewChild('contact', { static: true }) contactTF: ElementRef;

  userFields: Array<ElementRef>;

  constructor(private stepService: StepService) {
    this.isTouched = [false, false, false, false, false, false, false];
    this.isValid = [false, false, false, false, false, false, false];

    this.regForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      dob: new FormControl('', null),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confPassword: new FormControl('', [Validators.required]),
      contactNumber: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.userFields = [
      this.fnameTF,
      this.lnameTF,
      this.usernameTF,
      this.dobTF,
      this.passTF,
      this.confPassTF,
      this.contactTF,
    ];
  }

  inputData(event: Event) {
    let classes = (<HTMLInputElement>event.target).classList;
    let index = +classes[0];

    this.isTouched[index] =
      this.userFields[index].nativeElement.classList.contains('ng-dirty');
    this.isValid[index] =
      this.userFields[index].nativeElement.classList.contains('ng-valid');
  }

  inputDate(event: Event) {
    let date = (<HTMLDataElement>event.target).value;

    let classes = (<HTMLInputElement>event.target).classList;
    let index = +classes[0];

    let selectedDate = new Date(date).getTime();
    let today = Date.now();

    let temp = today - selectedDate;
    let years = Math.floor(temp / (1000 * 60 * 60 * 24 * 365));
    this.isTouched[index] = true;

    if (years >= 16) {
      this.isValid[index] = true;
      this.userFields[index].nativeElement.valid = true;
    } else {
      this.isValid[index] = false;
      this.userFields[index].nativeElement.valid = false;
    }
  }

  dateClicked(event: Event) {
    let classes = (<HTMLInputElement>event.target).classList;
    let index = +classes[0];
    this.isTouched[index] = true;
  }

  confPassword() {
    let pass = this.regForm.get('password')?.value;
    let confPass = this.regForm.get('confPassword')?.value;

    this.isTouched[5] =
      this.userFields[5].nativeElement.classList.contains('ng-dirty');

    if (pass == confPass) {
      this.isValid[5] = true;
    } else {
      this.isValid[5] = false;
    }
  }

  onRegister() {
    if (this.regForm.valid) {
      let user: User = {
        firstName: this.regForm.get('firstName')?.value,
        lastName: this.regForm.get('lastName')?.value,
        userName: this.regForm.get('username')?.value,
        dob: new Date(this.regForm.get('dob')?.value),
        password: this.regForm.get('password')?.value,
        contactNumber: this.regForm.get('contactNumber')?.value,
      };

      this.stepService
        .isUsernameExists(user.userName)
        .subscribe((isPresent: boolean) => {
          if (isPresent) {
            alert('Username already Present');
          } else {
            this.stepService.addNewUser(user).subscribe(() => {
              alert('Account created successfully!');
              this.regForm.reset();
            });
          }
        });
    } else {
      alert('Please enter all Deatails!');
    }
  }
}

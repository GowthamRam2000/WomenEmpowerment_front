import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  faCircleCheck,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Ngo } from '../../model/ngo.model';
import { NgoService } from '../../services/ngo.service';

@Component({
  selector: 'app-ngo-register',
  templateUrl: './ngo-register.component.html',
  styleUrls: ['./ngo-register.component.css'],
})
export class NgoRegisterComponent implements OnInit {
  faCircleCheck = faCircleCheck;
  faCircleXmark = faCircleXmark;
  regForm: FormGroup;

  isTouched: Array<Boolean>;
  isValid: Array<Boolean>;
  @ViewChild('ngoName', { static: true }) ngoTF: ElementRef;
  @ViewChild('username', { static: true }) usernameTF: ElementRef;
  @ViewChild('password', { static: true }) passTF: ElementRef;
  @ViewChild('confPass', { static: true }) confPassTF: ElementRef;
  @ViewChild('contact', { static: true }) contactTF: ElementRef;

  userFields: Array<ElementRef>;

  constructor(private ngoService: NgoService) {
    this.isTouched = [false, false, false, false, false];
    this.isValid = [false, false, false, false, false];

    this.regForm = new FormGroup({
      ngoName: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confPassword: new FormControl('', [Validators.required]),
      contactNumber: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.userFields = [
      this.ngoTF,
      this.usernameTF,
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

  confPassword() {
    let pass = this.regForm.get('password')?.value;
    let confPass = this.regForm.get('confPassword')?.value;

    this.isTouched[3] = true;
    if (pass == confPass) {
      this.isValid[3] = true;
    } else {
      this.isValid[3] = false;
    }
  }

  onRegister() {
    if (this.regForm.valid) {
      let ngo: Ngo = {
        username: this.regForm.get('username')?.value,
        password: this.regForm.get('password')?.value,
        ngoName: this.regForm.get('ngoName')?.value,
        contact: this.regForm.get('contactNumber')?.value,
      };

      this.ngoService.ngoExists(ngo.username).subscribe((isPresent) => {
        if (!isPresent) {
          this.ngoService.ngoRegister(ngo).subscribe(() => {
            alert('Account created successfully!');
            this.regForm.reset();
          });
        } else {
          alert('Username is already taken');
        }
      });
    } else {
      alert('Please enter all details');
    }
  }
}

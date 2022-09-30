import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CourseStatus } from 'src/app/model/course-status.model';
import { NgoFullData } from 'src/app/model/ngo-fulldate.model';
import { NgoLoginService } from 'src/app/services/ngo-login.service';
import { NgoService } from 'src/app/services/ngo.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  regForm: FormGroup;

  constructor(
    private ngoLogin: NgoLoginService,
    private ngoService: NgoService
  ) {
    this.regForm = new FormGroup({
      orgDetails: new FormGroup({
        orgName: new FormControl('', [Validators.required]),
        founder: new FormControl('', [Validators.required]),
        startedIn: new FormControl('', [Validators.required]),
        regId: new FormControl('', [Validators.required]),
        domain: new FormControl('', [Validators.required]),
        networth: new FormControl('', [
          Validators.required,
          Validators.pattern('^[0-9]+$'),
        ]),
      }),

      projectInCharge: new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        experience: new FormControl('', [
          Validators.required,
          Validators.pattern('^[0-9]+$'),
        ]),
        projectName: new FormControl('', [Validators.required]),
      }),

      contactDetails: new FormGroup({
        phoneno: new FormControl('', [
          Validators.required,
          Validators.pattern('^[0-9]{10}$'),
        ]),
        email: new FormControl('', [Validators.required, Validators.email]),
        address: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required]),
      }),

      courseDetails: new FormGroup({
        courseName: new FormControl('', [Validators.required]),
        courseDuration: new FormControl('', [Validators.required]),
        courseDescription: new FormControl('', [Validators.required]),
      }),
    });

    let username = <string>localStorage.getItem('username');
    this.ngoService.getNgoFullData(username).subscribe((data: NgoFullData) => {
      if (data.username) {
        this.regForm.get('orgDetails.orgName')?.setValue(data.orgName);
        this.regForm.get('orgDetails.founder')?.setValue(data.founder);
        this.regForm.get('orgDetails.startedIn')?.setValue(data.startedIn);
        this.regForm.get('orgDetails.domain')?.setValue(data.domain);
        this.regForm.get('orgDetails.networth')?.setValue(data.netWorth);
        this.regForm.get('orgDetails.regId')?.setValue(data.regId);

        this.regForm.get('projectInCharge.firstName')?.setValue(data.picFName);
        this.regForm.get('projectInCharge.lastName')?.setValue(data.picLName);
        this.regForm
          .get('projectInCharge.experience')
          ?.setValue(data.picExperience);
        this.regForm
          .get('projectInCharge.projectName')
          ?.setValue(data.projectName);

        this.regForm.get('contactDetails.phoneno')?.setValue(data.phoneNo);
        this.regForm.get('contactDetails.email')?.setValue(data.email);
        this.regForm.get('contactDetails.address')?.setValue(data.address);
        this.regForm.get('contactDetails.city')?.setValue(data.city);
        this.regForm.get('contactDetails.state')?.setValue(data.state);
      }
    });
  }

  ngOnInit(): void {}

  onRegister() {
    if (this.regForm.valid) {
      let username = localStorage.getItem('username')?.toString();

      let fullData: NgoFullData = {
        username,
        orgName: this.regForm.get('orgDetails.orgName')?.value,
        founder: this.regForm.get('orgDetails.founder')?.value,
        startedIn: this.regForm.get('orgDetails.startedIn')?.value,
        regId: this.regForm.get('orgDetails.regId')?.value,
        domain: this.regForm.get('orgDetails.domain')?.value,
        netWorth: this.regForm.get('orgDetails.networth')?.value,

        picFName: this.regForm.get('projectInCharge.firstName')?.value,
        picLName: this.regForm.get('projectInCharge.lastName')?.value,
        picExperience: this.regForm.get('projectInCharge.experience')?.value,
        projectName: this.regForm.get('projectInCharge.projectName')?.value,

        phoneNo: this.regForm.get('contactDetails.phoneno')?.value,
        email: this.regForm.get('contactDetails.email')?.value,
        address: this.regForm.get('contactDetails.address')?.value,
        city: this.regForm.get('contactDetails.city')?.value,
        state: this.regForm.get('contactDetails.state')?.value,
      };

      let courseStatus: CourseStatus = {
        provider: username,
        courseName: this.regForm.get('courseDetails.courseName')?.value,
        courseDuration: this.regForm.get('courseDetails.courseDuration')?.value,
        courseDescription: this.regForm.get('courseDetails.courseDescription')
          ?.value,
      };

      this.ngoService.addNgoFullDate(fullData).subscribe(() => {
        this.ngoService
          .updateCourseStatus(courseStatus)
          .subscribe((obj: CourseStatus) => {
            alert('Please note your registration id - ' + obj.regId);
          });
      });
    } else {
      alert('Please provide all details');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { CourseRegister } from 'src/app/model/course-register.model';
import { Course } from 'src/app/model/course.model';
import { UserFullData } from 'src/app/model/user-fulldata.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-step-registration2',
  templateUrl: './step-registration2.component.html',
  styleUrls: ['./step-registration2.component.css'],
})
export class StepRegistration2Component implements OnInit {
  regForm: FormGroup;
  faMagnifyingGlass = faMagnifyingGlass;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.regForm = new FormGroup({
      personalDetails: new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('', [Validators.required]),
        dateOfBirth: new FormControl('', [Validators.required]),
        aadharNo: new FormControl('', [Validators.required]),
        education: new FormControl('', [Validators.required]),
        maritalStatus: new FormControl('', [Validators.required]),
      }),

      familyDetails: new FormGroup({
        fatherName: new FormControl('', [Validators.required]),
        motherName: new FormControl('', [Validators.required]),
        husbandName: new FormControl('', []),
        noOfChilds: new FormControl('', [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
        ]),
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
        courseId: new FormControl('', [Validators.required]),
        courseName: new FormControl('', [Validators.required]),
        courseDuration: new FormControl('', [Validators.required]),
        courseDescription: new FormControl('', [Validators.required]),
        providedBy: new FormControl('', [Validators.required]),
      }),
    });

    let username = localStorage.getItem('username');
    if (!username) {
      username = 'abc';
    }

    this.userService
      .getUserFullData(username)
      .subscribe((user: UserFullData) => {
        if (user.aadharNo) {
          this.regForm
            .get('personalDetails.firstName')
            ?.setValue(user.firstName);
          this.regForm.get('personalDetails.lastName')?.setValue(user.lastName);
          this.regForm.get('personalDetails.dateOfBirth')?.setValue(user.dob);
          this.regForm.get('personalDetails.aadharNo')?.setValue(user.aadharNo);
          this.regForm
            .get('personalDetails.education')
            ?.setValue(user.education);
          this.regForm
            .get('personalDetails.maritalStatus')
            ?.setValue(user.maritalStatus);

          this.regForm
            .get('familyDetails.fatherName')
            ?.setValue(user.fatherName);
          this.regForm
            .get('familyDetails.motherName')
            ?.setValue(user.motherName);

          this.regForm.get('contactDetails.phoneno')?.setValue(user.phoneNo);
          this.regForm.get('contactDetails.email')?.setValue(user.email);
          this.regForm.get('contactDetails.address')?.setValue(user.address);
          this.regForm.get('contactDetails.city')?.setValue(user.city);
          this.regForm.get('contactDetails.state')?.setValue(user.state);
        }

        if (user.maritalStatus != 'Single') {
          this.regForm
            .get('familyDetails.husbandName')
            ?.setValue(user.husbandName);
          this.regForm.get('familyDetails.noOfKids')?.setValue(user.noOfChilds);
        }
      });
  }

  maritalStatusChanged(event: Event) {
    let index = (<HTMLSelectElement>event.target).selectedIndex;
    switch (index) {
      case 0:
        this.single();
        break;
      case 1:
        this.married();
        break;
      case 2:
        this.married();
        break;
    }
  }

  single() {
    this.regForm.get('familyDetails.husbandName')?.disable();
    this.regForm.get('familyDetails.noOfChilds')?.disable();
  }

  married() {
    this.regForm.get('familyDetails.husbandName')?.enable();
    this.regForm.get('familyDetails.noOfChilds')?.enable();
  }

  btnClick() {
    if (this.regForm.get('courseDetails.courseId')?.valid) {
      let temp = this.regForm.get('courseDetails.courseId')?.value;
      let id = +temp;

      this.userService.getCourseById(id).subscribe((course: Course) => {
        if (course.provider) {
          this.regForm
            .get('courseDetails.courseName')
            ?.setValue(course.courseName);
          this.regForm
            .get('courseDetails.courseDuration')
            ?.setValue(course.courseDuration);
          this.regForm
            .get('courseDetails.courseDescription')
            ?.setValue(course.courseDescription);
          this.regForm
            .get('courseDetails.providedBy')
            ?.setValue(course.provider);
        } else {
          alert('No course Found!');
        }
      });
    } else {
      alert('Please enter course id');
    }
  }

  register() {
    if (this.regForm.valid) {
      let username = localStorage.getItem('username');
      if (!username) {
        username = 'no-user';
      }

      let user: UserFullData = {
        username,
        firstName: this.regForm.get('personalDetails.firstName')?.value,
        lastName: this.regForm.get('personalDetails.lastName')?.value,
        dob: this.regForm.get('personalDetails.dateOfBirth')?.value,
        aadharNo: this.regForm.get('personalDetails.aadharNo')?.value,
        education: this.regForm.get('personalDetails.education')?.value,
        maritalStatus: this.regForm.get('personalDetails.maritalStatus')?.value,

        fatherName: this.regForm.get('familyDetails.fatherName')?.value,
        motherName: this.regForm.get('familyDetails.motherName')?.value,

        phoneNo: this.regForm.get('contactDetails.phoneno')?.value,
        email: this.regForm.get('contactDetails.email')?.value,
        address: this.regForm.get('contactDetails.address')?.value,
        city: this.regForm.get('contactDetails.city')?.value,
        state: this.regForm.get('contactDetails.state')?.value,
      };

      if (
        this.regForm.get('personalDetails.maritalStatus')?.value != 'Single'
      ) {
        user['husbandName'] = this.regForm.get(
          'familyDetails.husbandname'
        )?.value;
        user['noOfChilds'] = this.regForm.get(
          'familyDetails.noOfChilds'
        )?.value;
      }

      let courseId = this.regForm.get('courseDetails.courseId')?.value;

      let request: CourseRegister = {
        username,
        courseId,
        status: 'Under Processing',
      };

      this.userService.saveFullData(user).subscribe(() => {
        this.userService
          .registerCourse(request)
          .subscribe((req: CourseRegister) => {
            alert('REGISTRATION ID : ' + req.requestId);
          });
      });
    } else {
      alert('Please enter entire data');
    }
  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CourseRegister } from 'src/app/model/course-register.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-step-status',
  templateUrl: './step-status.component.html',
  styleUrls: ['./step-status.component.css'],
})
export class StepStatusComponent implements OnInit {
  @ViewChild('tf', { static: true }) tf: ElementRef;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  getStatus() {
    let temp = (<HTMLInputElement>this.tf.nativeElement).value;
    if (temp) {
      let id = +temp;
      this.userService
        .getRegisterStatus(id)
        .subscribe((req: CourseRegister) => {
          if (req.username) {
            alert('STATUS : ' + req.status);
          } else {
            alert('Invalid Registration Id');
          }
        });
    } else {
      alert('Please provider registration id');
    }
  }
}

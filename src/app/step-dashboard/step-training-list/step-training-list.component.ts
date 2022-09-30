import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-step-training-list',
  templateUrl: './step-training-list.component.html',
  styleUrls: ['./step-training-list.component.css'],
})
export class StepTrainingListComponent implements OnInit {
  courses: Array<Course>;

  constructor(private userService: UserService) {
    this.courses = [];
  }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.userService.getAllCourse().subscribe((arr) => {
      for (let i = 0; i < arr.length; i++) {
        this.courses.push(arr[i]);
      }
    });
  }
}

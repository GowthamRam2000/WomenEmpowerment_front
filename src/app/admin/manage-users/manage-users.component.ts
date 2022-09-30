import { Component, OnInit } from '@angular/core';
import { CourseRegister } from 'src/app/model/course-register.model';
import { CourseStatus } from 'src/app/model/course-status.model';
import { Course } from 'src/app/model/course.model';
import { CourseEnroll } from 'src/app/model/enroll.model';
import { UserFullData } from 'src/app/model/user-fulldata.model';
import { UserCourseReq } from 'src/app/model/usercourse-status.modle';
import { AdminService } from 'src/app/services/admin.service';
import { User } from 'src/app/step/user.model';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css'],
})
export class ManageUsersComponent implements OnInit {
  arr: Array<{
    userName: string;
    userContact: string;
    courseName: string;
    courseDuration: string;
    courseDescription?: string;
    provider?: string;
    regId?: number;
    courseId?: number;
  }>;

  constructor(private admin: AdminService) {
    this.arr = [];
  }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.arr.splice(0, this.arr.length);
    let username = localStorage.getItem('username');
    this.admin
      .getPendingCourseRequests()
      .subscribe((courses: Array<CourseRegister>) => {
        for (let i = 0; i < courses.length; i++) {
          if (courses[i].status == 'Under Processing') {
            let tempCId = +courses[i].courseId;
            let tempUname = courses[i].username;

            this.admin
              .getCourseData(tempCId)
              .subscribe((courseData: Course) => {
                this.admin
                  .getUserData(tempUname)
                  .subscribe((userdata: UserFullData) => {
                    let tempUsername = userdata.username;
                    if (!tempUsername) {
                      tempUsername = 'abc';
                    }

                    let obj = {
                      regId: courses[i].requestId,
                      userName: tempUsername,
                      userContact: userdata.phoneNo,
                      courseName: courseData.courseName,
                      courseDuration: courseData.courseDuration,
                      provider: courseData.provider,
                      courseDescription: courseData.courseDescription,
                      courseId: +courses[i].courseId,
                    };

                    this.arr.push(obj);
                  });
              });
          }
        }
      });
  }

  onAccept(i: number) {
    let des = this.arr[i].courseDescription;
    if (!des) {
      des = 'some course';
    }

    let tempUsername = this.arr[i].userName;
    let tempCourseId = this.arr[i].regId;

    let cstatus: UserCourseReq = {
      requestId: this.arr[i].regId,
      username: this.arr[i].userName,
      courseId: this.arr[i].courseId,
      status: 'Accepted',
    };

    this.admin.updateUserCourseStatus(cstatus).subscribe(() => {
      if (!tempCourseId) {
        tempCourseId = 1;
      }

      let enroll: CourseEnroll = {
        username: tempUsername,
        courseId: tempCourseId,
      };

      this.admin.enrollCourse(enroll).subscribe(() => {
        this.init();
      });
    });
  }

  onReject(i: number) {}
}

import { Component, OnInit } from '@angular/core';
import { CourseStatus } from 'src/app/model/course-status.model';
import { Course } from 'src/app/model/course.model';
import { NgoFullData } from 'src/app/model/ngo-fulldate.model';
import { Ngo } from 'src/app/model/ngo.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-manage-ngos',
  templateUrl: './manage-ngos.component.html',
  styleUrls: ['./manage-ngos.component.css'],
})
export class ManageNgosComponent implements OnInit {
  arr: Array<{
    ngoName: string;
    ngoContact: string;
    courseName: string;
    courseDuration: string;
  }> = [];
  course: Array<CourseStatus> = [];

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.course.splice(0, this.course.length);
    this.arr.splice(0, this.arr.length);

    this.adminService
      .getPendingNgoRequests()
      .subscribe((arr: Array<CourseStatus>) => {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].status == 'Accepted' || arr[i].status == 'Rejected') {
            continue;
          }
          this.course.push(arr[i]);
        }

        for (let i = 0; i < this.course.length; i++) {
          let provider = this.course[i].provider;

          if (!provider) {
            provider = 'abc';
          }

          this.adminService
            .getNgoFullData(provider)
            .subscribe((ngo: NgoFullData) => {
              let obj = {
                ngoName: ngo.orgName,
                ngoContact: ngo.phoneNo,
                courseName: this.course[i].courseName,
                courseDuration: this.course[i].courseDuration,
              };

              this.arr.push(obj);
            });
        }
      });
  }

  onAccept(i: number) {
    let obj: CourseStatus = this.course[i];
    obj.status = 'Accepted';

    let course: Course = {
      provider: obj.provider,
      courseName: obj.courseName,
      courseDuration: obj.courseDuration,
      courseDescription: obj.courseDescription,
    };

    this.adminService.updateStatus(obj).subscribe(() => {
      this.adminService.addNewCourse(course).subscribe(() => {
        this.init();
      });
    });
  }

  onDecline(i: number) {
    let obj: CourseStatus = this.course[i];
    obj.status = 'Rejected';

    this.adminService.updateStatus(obj).subscribe(() => {
      this.init();
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../model/admin.model';
import { CourseRegister } from '../model/course-register.model';
import { CourseStatus } from '../model/course-status.model';
import { Course } from '../model/course.model';
import { CourseEnroll } from '../model/enroll.model';
import { NgoFullData } from '../model/ngo-fulldate.model';
import { NgoFaq } from '../model/ngofaq.model';
import { UserFaq } from '../model/user-faq.model';
import { UserFullData } from '../model/user-fulldata.model';
import { UserCourseReq } from '../model/usercourse-status.modle';
import { User } from '../step/user.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  baseUrl: string = 'http://localhost:8080/WomenApp';

  constructor(private http: HttpClient) {}

  login(admin: Admin) {
    return this.http.post<boolean>(this.baseUrl + '/valid-admin', admin);
  }

  setLogin(username: string) {
    localStorage.setItem('username', username);
  }

  getPendingNgoRequests() {
    return this.http.get<Array<CourseStatus>>(this.baseUrl + '/pending-ngos');
  }

  getNgoFullData(username: string) {
    return this.http.get<NgoFullData>(
      this.baseUrl + '/ngo-full-data/' + username
    );
  }

  addNewCourse(course: Course) {
    return this.http.post(this.baseUrl + '/course', course);
  }

  updateStatus(status: CourseStatus) {
    return this.http.put(this.baseUrl + '/ngo-status', status);
  }

  getNgoFaqs() {
    return this.http.get<Array<NgoFaq>>(this.baseUrl + '/ngo-faqs');
  }

  updateNgoFaq(answer: NgoFaq) {
    return this.http.put(this.baseUrl + '/ngo-faq', answer);
  }

  getPendingCourseRequests() {
    return this.http.get<Array<CourseRegister>>(
      this.baseUrl + '/course-requests'
    );
  }

  getCourseData(id: number) {
    return this.http.get<Course>(this.baseUrl + '/course/' + id);
  }

  getUserData(username: string) {
    return this.http.get<UserFullData>(this.baseUrl + '/user/' + username);
  }

  enrollCourse(enroll: CourseEnroll) {
    return this.http.post(this.baseUrl + '/enroll-course', enroll);
  }

  updateUserCourseStatus(status: UserCourseReq) {
    return this.http.post(this.baseUrl + '/course-request', status);
  }

  getUserComments() {
    return this.http.get<Array<UserFaq>>(this.baseUrl + '/user-faqs');
  }

  answerUserFaq(answer: UserFaq) {
    return this.http.put(this.baseUrl + '/user-faq', answer);
  }
}

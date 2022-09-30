import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CourseRegister } from '../model/course-register.model';
import { Course } from '../model/course.model';
import { NgoFaq } from '../model/ngofaq.model';
import { UserFaq } from '../model/user-faq.model';
import { UserFullData } from '../model/user-fulldata.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: string = 'http://localhost:8080/WomenApp';

  constructor(private http: HttpClient) {}

  getAllCourse() {
    return this.http.get<Array<Course>>(this.baseUrl + '/courses');
  }

  getCourseById(id: number) {
    return this.http.get<Course>(this.baseUrl + '/course/' + id);
  }

  saveFullData(ufd: UserFullData) {
    return this.http.post(this.baseUrl + '/user', ufd);
  }

  getUserFullData(username: string) {
    return this.http.get<UserFullData>(this.baseUrl + '/user/' + username);
  }

  registerCourse(course: CourseRegister) {
    return this.http.post<CourseRegister>(
      this.baseUrl + '/course-request',
      course
    );
  }

  getRegisterStatus(id: number) {
    return this.http.get<CourseRegister>(
      this.baseUrl + '/course-request/' + id
    );
  }

  postFaq(faq: UserFaq) {
    return this.http.post(this.baseUrl + '/user-faq', faq);
  }

  getFaqs(username: string) {
    return this.http.get<Array<NgoFaq>>(
      this.baseUrl + '/user-faqs/' + username
    );
  }
}

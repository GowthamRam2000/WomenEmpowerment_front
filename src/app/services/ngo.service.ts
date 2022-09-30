import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CourseStatus } from '../model/course-status.model';
import { NgoFullData } from '../model/ngo-fulldate.model';
import { Ngo } from '../model/ngo.model';
import { NgoFaq } from '../model/ngofaq.model';

@Injectable({
  providedIn: 'root',
})
export class NgoService {
  baseUrl: string = 'http://localhost:8080/WomenApp';
  constructor(private http: HttpClient) {}

  ngoRegister(ngo: Ngo) {
    return this.http.post<any>(this.baseUrl + '/ngo-register', ngo);
  }

  ngoExists(username: string) {
    return this.http.get<boolean>(this.baseUrl + '/ngo-present/' + username);
  }

  ngoLogin(obj: { username: string; password: string }) {
    return this.http.post<boolean>(this.baseUrl + '/ngo-login', obj);
  }

  getNgoFullData(username: string) {
    return this.http.get<NgoFullData>(
      this.baseUrl + '/ngo-full-data/' + username
    );
  }

  addNgoFullDate(fullData: NgoFullData) {
    return this.http.post<any>(this.baseUrl + '/ngo-data', fullData);
  }

  updateCourseStatus(status: CourseStatus) {
    return this.http.post<CourseStatus>(this.baseUrl + '/ngo-status', status);
  }

  getNgoStatus(id: number) {
    return this.http.get<CourseStatus>(this.baseUrl + '/ngo-status/' + id);
  }

  postFaq(faq: NgoFaq) {
    return this.http.post(this.baseUrl + '/ngo-faq', faq);
  }

  getFaqs(username: string) {
    return this.http.get<Array<NgoFaq>>(this.baseUrl + '/ngo-faqs/' + username);
  }
}

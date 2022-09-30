import { Component, ElementRef, OnInit } from '@angular/core';
import { AdminLoginComponent } from 'src/app/admin-login/admin-login.component';
import { NgoFaq } from 'src/app/model/ngofaq.model';
import { UserFaq } from 'src/app/model/user-faq.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-faqs',
  templateUrl: './admin-faqs.component.html',
  styleUrls: ['./admin-faqs.component.css'],
})
export class AdminFaqsComponent implements OnInit {
  ngoQuestions: Array<NgoFaq>;
  userQuestions: Array<UserFaq>;
  currAnswer: string;

  constructor(private adminService: AdminService) {
    this.ngoQuestions = [];
    this.userQuestions = [];
  }

  ngOnInit(): void {
    this.init();
    this.init2();
  }

  init() {
    this.ngoQuestions.splice(0, this.ngoQuestions.length);

    this.adminService.getNgoFaqs().subscribe((arr: Array<NgoFaq>) => {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].answer == 'No Response') {
          this.ngoQuestions.push(arr[i]);
        }
      }
    });
  }

  init2() {
    this.userQuestions.splice(0, this.ngoQuestions.length);

    this.adminService.getUserComments().subscribe((arr: Array<UserFaq>) => {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].answer == 'No Response') {
          this.userQuestions.push(arr[i]);
        }
      }
    });
  }

  answer(id: number) {
    let obj: NgoFaq = {
      qId: this.ngoQuestions[id].qId,
      username: this.ngoQuestions[id].username,
      question: this.ngoQuestions[id].question,
      answer: this.currAnswer,
    };

    this.adminService.updateNgoFaq(obj).subscribe(() => {
      this.init();
    });
  }

  enterAnswer(event: Event) {
    let ans = (<HTMLInputElement>event.target).value;
    this.currAnswer = ans;
  }

  userAnswer(id: number) {
    console.log('clicked');

    let obj: UserFaq = {
      qId: this.userQuestions[id].qId,
      username: this.userQuestions[id].username,
      question: this.userQuestions[id].question,
      answer: this.currAnswer,
    };

    this.adminService.answerUserFaq(obj).subscribe(() => {
      this.init2();
    });
  }
}

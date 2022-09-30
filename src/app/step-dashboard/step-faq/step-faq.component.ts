import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgoFaq } from 'src/app/model/ngofaq.model';
import { UserFaq } from 'src/app/model/user-faq.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-step-faq',
  templateUrl: './step-faq.component.html',
  styleUrls: ['./step-faq.component.css'],
})
export class StepFaqComponent implements OnInit {
  userFaqs: Array<UserFaq>;
  @ViewChild('tf', { static: true }) tf: ElementRef;

  constructor(private userService: UserService) {
    this.userFaqs = [];
  }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.userFaqs.splice(0, this.userFaqs.length);
    let username = localStorage.getItem('username');
    if (!username) {
      username = 'abc';
    }

    this.userService.getFaqs(username).subscribe((faqs: Array<NgoFaq>) => {
      for (let i = 0; i < faqs.length; i++) {
        this.userFaqs.push(faqs[i]);
      }
    });
  }

  postQuery() {
    let username = localStorage.getItem('username');
    if (!username) {
      username = 'abc';
    }

    let question = (<HTMLTextAreaElement>this.tf.nativeElement).value;
    if (question) {
      let faq: UserFaq = {
        username,
        question,
        answer: 'No Response',
      };

      this.userService.postFaq(faq).subscribe(() => {
        this.init();
      });
    } else {
      alert('Please enter you query');
    }
  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgoFaq } from 'src/app/model/ngofaq.model';
import { NgoService } from 'src/app/services/ngo.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
})
export class FaqsComponent implements OnInit {
  @ViewChild('query', { static: false }) query: ElementRef;
  userQuestions: Array<NgoFaq>;

  constructor(private ngoService: NgoService) {}

  ngOnInit(): void {
    this.getUserQuestion();
  }

  getUserQuestion() {
    let username = localStorage.getItem('username')?.toString();
    if (username == undefined) {
      username = 'abc';
    }

    this.ngoService.getFaqs(username).subscribe((arr: Array<NgoFaq>) => {
      this.userQuestions = arr;
    });
  }

  onPost() {
    let username = localStorage.getItem('username')?.toString();
    let question = (<HTMLTextAreaElement>this.query.nativeElement).value;

    if (question) {
      let obj: NgoFaq = {
        username,
        question,
        answer: 'No Response',
      };

      this.ngoService.postFaq(obj).subscribe(() => {
        this.getUserQuestion();
      });
    } else {
      alert('Please enter your query');
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { UserFaq } from 'src/app/model/user-faq.model';

@Component({
  selector: 'app-faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.css'],
})
export class FaqItemComponent implements OnInit {
  @Input() faq: UserFaq;
  constructor() {}

  ngOnInit(): void {}
}

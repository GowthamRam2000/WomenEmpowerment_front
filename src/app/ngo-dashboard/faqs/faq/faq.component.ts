import { Component, Input, OnInit } from '@angular/core';
import { NgoFaq } from 'src/app/model/ngofaq.model';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit {
  @Input() faq: NgoFaq;

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-step-side-bar',
  templateUrl: './step-side-bar.component.html',
  styleUrls: ['./step-side-bar.component.css'],
})
export class StepSideBarComponent implements OnInit {
  faHouse = faHouse;
  faUser = faUser;
  faUserPlus = faUserPlus;
  faMessage = faMessage;

  constructor() {}

  ngOnInit(): void {}
}

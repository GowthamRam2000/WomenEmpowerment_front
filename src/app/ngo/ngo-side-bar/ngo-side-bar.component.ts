import { Component, OnInit } from '@angular/core';

import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ngo-side-bar',
  templateUrl: './ngo-side-bar.component.html',
  styleUrls: ['./ngo-side-bar.component.css'],
})
export class NgoSideBarComponent implements OnInit {
  faHouse = faHouse;
  faUser = faUser;
  faUserPlus = faUserPlus;
  faMessage = faMessage;

  constructor() {}

  ngOnInit(): void {}
}

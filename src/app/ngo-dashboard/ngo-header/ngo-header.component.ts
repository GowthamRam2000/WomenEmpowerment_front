import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngo-header',
  templateUrl: './ngo-header.component.html',
  styleUrls: ['./ngo-header.component.css'],
})
export class NgoHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onLogout(event: Event) {
    event.preventDefault();
  }
}

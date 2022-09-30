import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css'],
})
export class OrganizationsComponent implements OnInit {
  ngos: Array<{ name: string; contact: string; courses: number }> = [
    { name: 'Ngo name 1', contact: '9671297431', courses: 2 },
    { name: 'Ngo name 2', contact: '9120384012', courses: 3 },
    { name: 'Ngo name 3', contact: '9989981238', courses: 1 },
    { name: 'Ngo name 4', contact: '9080808082', courses: 5 },
    { name: 'Ngo name 5', contact: '9671297431', courses: 2 },
    { name: 'Ngo name 6', contact: '9120384012', courses: 3 },
    { name: 'Ngo name 7', contact: '9989981238', courses: 1 },
    { name: 'Ngo name 8', contact: '9080808082', courses: 5 },
  ];

  constructor() {}

  ngOnInit(): void {}
}

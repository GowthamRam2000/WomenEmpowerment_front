import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/model/course.model';

@Component({
  selector: 'app-training-item',
  templateUrl: './training-item.component.html',
  styleUrls: ['./training-item.component.css'],
})
export class TrainingItemComponent implements OnInit {
  @Input() data: Course;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  register() {
    this.router.navigate(['base-2', 'registration']);
  }
}

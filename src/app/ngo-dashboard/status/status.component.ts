import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CourseStatus } from 'src/app/model/course-status.model';
import { NgoService } from 'src/app/services/ngo.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
})
export class StatusComponent implements OnInit {
  @ViewChild('tf', { static: true }) tf: ElementRef;
  constructor(private ngoService: NgoService) {}

  ngOnInit(): void {}

  getStatus() {
    let value = (<HTMLInputElement>this.tf.nativeElement).value;
    if (value) {
      let temp = +value;
      this.ngoService.getNgoStatus(temp).subscribe((data: CourseStatus) => {
        if (data.provider) {
          alert('STATUS : ' + data.status);
        } else {
          alert('No Such Application');
        }
      });
    } else {
      alert('Please enter registration id');
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-mentoring',
  templateUrl: './mentoring.component.html',
  styleUrls: ['./mentoring.component.scss']
})
export class MentoringComponent implements OnInit {

  constructor(public modalRef: BsModalRef) {}

  ngOnInit(): void {
  }

}

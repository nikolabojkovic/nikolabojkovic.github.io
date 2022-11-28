import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-mentoring',
  templateUrl: './mentoring.component.html',
  styleUrls: ['./mentoring.component.scss']
})
export class MentoringComponent implements OnInit {

  constructor(public modalRef: BsModalRef) {}

  ngOnInit(): void {
  }

  btn_close = faXmark;
}

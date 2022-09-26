import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-leadership',
  templateUrl: './leadership.component.html',
  styleUrls: ['./leadership.component.scss']
})
export class LeadershipComponent implements OnInit {

  constructor(public modalRef: BsModalRef) {}

  ngOnInit(): void {
  }

}

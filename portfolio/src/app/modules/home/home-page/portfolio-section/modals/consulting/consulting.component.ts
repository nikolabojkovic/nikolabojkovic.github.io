import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-consulting',
  templateUrl: './consulting.component.html',
  styleUrls: ['./consulting.component.scss']
})
export class ConsultingComponent implements OnInit {

  constructor(public modalRef: BsModalRef) {}

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-software-architecture',
  templateUrl: './software-architecture.component.html',
  styleUrls: ['./software-architecture.component.scss']
})
export class SoftwareArchitectureComponent implements OnInit {

  constructor(public modalRef: BsModalRef) {}

  ngOnInit(): void {
  }

}

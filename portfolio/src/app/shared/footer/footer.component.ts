import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  year: number = 2023;
  constructor() { }

  ngOnInit(): void {
    this.setDate();
  }

  setDate(): void {
    let activeYear = new Date();
    this.year = activeYear.getFullYear();
  }

}

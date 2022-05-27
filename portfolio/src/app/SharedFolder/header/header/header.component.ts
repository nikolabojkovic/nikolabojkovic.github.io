import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
 
  }


  //Themes
  @Input() site: any;
  
  implementThemeSite(): void {
    this.site.implementTheme();
  }
  setUpThemeDarkSite(): void {
    this.site.setUpThemeDark();
  }
  setUpThemeLightSite(): void {
    this.site.setUpThemeLight();
  }
}

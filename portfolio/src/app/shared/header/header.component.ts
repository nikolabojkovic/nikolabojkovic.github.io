import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void { }

  onDarkThemeClick(): void {
    this.settingsService.setDarkTheme();
  }

  onLightThemeClick(): void {
    this.settingsService.setLightTheme();
  }

   activatelink(linkitem: HTMLElement) {
    let menuitems = document.getElementsByClassName('menu-links');
     for(let i=0; i<menuitems.length; i++) {
       menuitems[i].classList.remove('active-menu-item');
       menuitems[i].classList.add('default-menu-item');
     }
     linkitem.classList.remove('default-menu-item')
     linkitem.classList.add('active-menu-item');
  }

}

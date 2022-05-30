import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private themeService: SettingsService) { }

  ngOnInit(): void { }

  onDarkThemeClick(): void {
    this.themeService.setDarkTheme();
  }

  onLightThemeClick(): void {
    this.themeService.setLightTheme();
  }
}

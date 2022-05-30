import { Component} from '@angular/core';
import { SettingsService } from './shared/services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
  storage = 'Storage is place where you store an information';

  // faCoffee = faCoffee;                   font-awesome variable

  constructor(private settingsService: SettingsService) {
    this.settingsService.loadSettings();
  }
  
  ngOnInit(): void { }

  onEnglishLanguageClick(): void {
    this.settingsService.setLanguage('en-US');
  }

  onSerbianLanguageClick(): void {
    this.settingsService.setLanguage('srb-LT');
  }

  onDarkThemeClick(): void {
    this.settingsService.setDarkTheme();
  }

  onLightThemeClick(): void {
    this.settingsService.setLightTheme();
  }
}

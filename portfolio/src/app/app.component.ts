import { Component,OnInit} from '@angular/core';
import { SettingsService } from './shared/services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
  storage = 'Storage is place where you store an information';

  ngOnInit(): void {
    this.settingsService.homeShadowID = this.sendHomeShadow();
  }

  constructor(private settingsService: SettingsService) {
    this.settingsService.loadSettings();
  }

  sendHomeShadow(): HTMLElement {
      return document.getElementById("siteContainerTop") as HTMLElement;
  }

  // faCoffee = faCoffee;                   font-awesome variable
}

import { Injectable, EventEmitter } from '@angular/core';
import { Theme } from './theme';
import { light } from './themes/light.theme';
import { dark } from './themes/dark.theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public active: Theme = light;
  private availableThemes: Theme[] = [light, dark];
  public themeChanged: EventEmitter<Theme> = new EventEmitter<Theme>();

  constructor() {
    const current = localStorage.getItem('theme');

    if (current) {
      this.active = JSON.parse(current);
    }
   }

  isDarkTheme(): boolean {
    return this.active.name === dark.name;
  }

  setDarkTheme(): void {
    this.setActiveTheme(dark);
  }

  setLightTheme(): void {
    this.setActiveTheme(light);
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;
    localStorage.setItem('theme', JSON.stringify(this.active));

    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });

    this.themeChanged.emit(this.active);
  }
}

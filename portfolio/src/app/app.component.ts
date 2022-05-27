import { Component, ElementRef, ViewChild } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
  storage = 'Storage is place where you store an information';

  // faCoffee = faCoffee;                   font-awesome variable

  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en-US');

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('srb-LT');
  }
  

  changeToEnglish(): void {
    this.translate.use('en-US');
    this.setUpThemeDark();
  }

  changeToSerbian(): void {
    this.translate.use('srb-LT');
    this.setUpThemeLight();
  }


  ngOnInit(): void {

  }

  @ViewChild('site')
  site!: ElementRef;


  implementTheme(): void {
    let theme = localStorage.getItem("Theme");
    if(theme == null) {
        // Dark theme deafault
        localStorage.setItem("Theme","Dark");
        this.setUpThemeDark();
    } else if (theme == "Dark"){
        // Dark theme
        this.setUpThemeDark();
    } else {
        // Light theme
        this.setUpThemeLight();
    }
  }

  setUpThemeDark(): void {
    localStorage.setItem("Theme","Dark");
    this.site.nativeElement.classList.add("theme-dark");
    this.site.nativeElement.classList.remove("theme-light");
  }
  
  setUpThemeLight(): void {
    localStorage.setItem("Theme","Light");
    this.site.nativeElement.classList.remove("theme-dark");
    this.site.nativeElement.classList.add("theme-light");
  }

}

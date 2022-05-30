import { Component} from '@angular/core';
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
  }

  changeToSerbian(): void {
    this.translate.use('srb-LT');
  }


  ngOnInit(): void {

  }

}

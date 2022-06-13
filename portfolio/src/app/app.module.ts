import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomePageComponent } from './home/home.page.component';
import { BannerComponent } from './home/banner/banner.component';
import { HomeService } from './home/home.service';
import { ContactPageComponent } from './contact/contact.page.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { ContactInfoComponent } from './contact/contact-info/contact-info.component';
import { PageNotFoundComponent } from './shared/pageNotFound/404.page.component';
import { SettingsService } from './shared/services/settings.service';
import { FeatureComponent } from './feature/feature.page.component';
import { ResumeComponent } from './resume/resume.page.component';
import { FeaturesSectionComponent } from './home/features-section/features-section.component';
import { ResumeSectionComponent } from './home/resume-section/resume-section.component';
import { PortfolioSectionComponent } from './home/portfolio-section/portfolio-section.component';
import { ClientsSectionComponent } from './home/clients-section/clients-section.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomePageComponent,
    BannerComponent,
    ContactPageComponent,
    ContactFormComponent,
    ContactInfoComponent,
    PageNotFoundComponent,
    FeatureComponent,
    ResumeComponent,
    FeaturesSectionComponent,
    ResumeSectionComponent,
    PortfolioSectionComponent,
    ClientsSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {       // Allowing icons to be used in angular
    library.addIconPacks(fas,far,fab);
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './modules/home/home.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { SettingsService } from './shared/services/settings.service';

import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FooterComponent } from './shared/footer/footer.component';
import { StandardHeaderComponent } from './shared/header/standard-header/standard-header.component';
import { PageNotFoundComponent } from './shared/pageNotFound/404.page.component';
import { MobileHeaderComponent } from './shared/header/mobile-header/mobile-header.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    StandardHeaderComponent,
    PageNotFoundComponent,
    MobileHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HomeModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
    CarouselModule.forRoot()
  ],
  exports: [
    HomeModule
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule {}

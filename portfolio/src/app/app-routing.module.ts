import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './modules/contact/contact-page/contact.page.component';
import { HomePageComponent } from './modules/home/home-page/home.page.component';
import { PageNotFoundComponent } from './shared/pageNotFound/404.page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full',redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'page404',component: PageNotFoundComponent },
  { path: 'contact', loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule) },
  { path: '**',redirectTo: 'page404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

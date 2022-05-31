import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact/contact.page.component';
import { HomePageComponent } from './home/home.page.component';
import { PageNotFoundComponent } from './shared/pageNotFound/404.page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full',redirectTo: 'home'},
  {path: 'home', component: HomePageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'page404',component: PageNotFoundComponent},
  {path: '**',redirectTo: 'page404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

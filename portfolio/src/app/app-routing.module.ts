import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoaderComponent } from './shared/loader/loader.component';
import { PageNotFoundComponent } from './shared/pageNotFound/404.page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full',redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'page404', component: PageNotFoundComponent },
  { path: 'contact', loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule) },
  { path: 'features', loadChildren: () => import('./modules/feature/feature.module').then(m => m.FeatureModule) },
  { path: 'resume' , loadChildren: () => import('./modules/resume/resume.module').then(m => m.ResumeModule)},
  { path: 'loader', component: LoaderComponent },
  { path: '**',redirectTo: 'page404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

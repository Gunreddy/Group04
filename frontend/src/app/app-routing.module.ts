import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SportsSectionComponent } from './components/sports-section/sports-section.component';
import {HomeComponent} from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"sports",component:SportsSectionComponent},
  {path:"contact-us",component:ContactUsComponent},
  {path:"about-us",component:AboutUsComponent},
  // {path: 'register-login',component: RegisterLoginComponent},
  // {path: 'add-news',component: AddNewsComponent},
  // {path: 'news-list', component: DataListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

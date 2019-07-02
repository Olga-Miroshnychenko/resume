import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from "./modules/home/home-page/home-page.component";
import { AboutMeComponent } from "./modules/about-me/about-me.component";
import { ContactComponent } from "./modules/contact/contact.component";


const routes: Routes = [
  { path: '', component: HomePageComponent, data: { preload: true }  },
  { path: 'home', component: HomePageComponent, data: { preload: true }  },
  { path: 'about', component: AboutMeComponent  ,data: { preload: true }},
  { path: 'contact', component: ContactComponent ,data: { preload: true } }
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

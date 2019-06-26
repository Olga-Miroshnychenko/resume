import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from "./modules/home/home-page/home-page.component";
import { AboutMeComponent } from "./modules/about-me/about-me.component";
import { ContactComponent } from "./modules/contact/contact.component";

const routes: Routes = [
  { path: '', component: HomePageComponent  },
  { path: 'home', component: HomePageComponent  },
  { path: 'about', component: AboutMeComponent  },
  { path: 'contact', component: ContactComponent  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

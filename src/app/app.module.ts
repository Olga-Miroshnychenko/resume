import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from "./modules/navbar/module/navbar.module";
import { MatToolbarModule } from "@angular/material";
import { HomeModule } from "./modules/home/module/home.module";
import { FooterModule} from "./modules/footer/module/footer.module";
import { AboutMeComponent } from './modules/about-me/about-me.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from "./intereptors/token.interceptor";
import { InstaListComponent } from './modules/about-me/component/insta-list/insta-list.component';
import { ContactComponent } from './modules/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    InstaListComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavbarModule,
    MatToolbarModule,
    HomeModule,
    FooterModule,
    HttpClientModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

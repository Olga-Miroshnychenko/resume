import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from "../home-page/home-page.component";
import { HomeRoutingModule } from "./home-routing.module";

import { ResumeComponent} from "../../resume/resume/resume.component";


@NgModule({
  declarations: [
    HomePageComponent,
    ResumeComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

  ]
})
export class HomeModule { }

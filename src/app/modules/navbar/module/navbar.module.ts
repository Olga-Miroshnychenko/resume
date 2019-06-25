import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../components/navbar.component";
import { MatToolbarModule } from "@angular/material";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }

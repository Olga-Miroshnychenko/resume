import {Component, OnInit} from '@angular/core';
import { UserService } from "../../common/user.service";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
 challenge ;
  challenges;
  item;

  constructor(
    private userService: UserService,



  ) {
  }

  ngOnInit() {
      this.userService.getImages().subscribe((  challenges : any) => {
        this.challenges = challenges;
      }, (err) => {
      });

  }
}


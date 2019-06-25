import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-insta-list',
  templateUrl: './insta-list.component.html',
  styleUrls: ['./insta-list.component.css']
})
export class InstaListComponent implements OnInit {
  @Input() challenges;
  constructor() { }

  ngOnInit() {
  }

}

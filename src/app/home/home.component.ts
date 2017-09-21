import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageElement:Array<String> = ['./assets/images/001.jpg','./assets/images/002.jpg','./assets/images/003.jpg','./assets/images/004.jpg'];

  constructor() { }

  ngOnInit() {
  }

}

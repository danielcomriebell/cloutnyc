import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageElement:Array<String> = ['./assets/first-collection/016.jpg','./assets/first-collection/012.jpg','./assets/first-collection/007.jpg','./assets/first-collection/004.jpg'];

  constructor() { }

  ngOnInit() {
  }

}

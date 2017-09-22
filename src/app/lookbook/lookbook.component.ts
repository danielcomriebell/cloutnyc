import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lookbook',
  templateUrl: './lookbook.component.html',
  styleUrls: ['./lookbook.component.scss']
})
export class LookbookComponent implements OnInit {
  collectionElement:Array<String> = ['./assets/collection/001.jpg','./assets/collection/002.jpg','./assets/collection/003.jpg','./assets/collection/004.jpg','./assets/collection/005.jpg','./assets/collection/006.jpg','./assets/collection/007.jpg','./assets/collection/008.jpg'];
  constructor() { }

  ngOnInit() {
  }

}

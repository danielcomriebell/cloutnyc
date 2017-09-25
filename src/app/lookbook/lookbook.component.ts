import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lookbook',
  templateUrl: './lookbook.component.html',
  styleUrls: ['./lookbook.component.scss']
})
export class LookbookComponent implements OnInit {
  collectionElement:Array<String> = ['./assets/first-collection/009.jpg','./assets/first-collection/012.jpg','./assets/first-collection/005.jpg','./assets/first-collection/004.jpg','./assets/first-collection/005.jpg','./assets/first-collection/006.jpg','./assets/first-collection/007.jpg','./assets/first-collection/008.jpg','./assets/first-collection/009.jpg','./assets/first-collection/010.jpg','./assets/first-collection/011.jpg','./assets/first-collection/012.jpg','./assets/first-collection/013.jpg','./assets/first-collection/014.jpg','./assets/first-collection/015.jpg','./assets/first-collection/016.jpg',];
  constructor() { }

  ngOnInit() {
  }

}

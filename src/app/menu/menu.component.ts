import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuElement:Array<String> = ['home','about', 'lookbook', 'apply'];
  footerElement:Array<String> = ['terms','privacy'];
  constructor() { }
  ngOnInit() {
  }

}
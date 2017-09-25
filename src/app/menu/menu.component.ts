import { Component, OnInit } from '@angular/core';
import { animation } from '../animations';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations:[animation]
})
export class MenuComponent implements OnInit {
  menuElement:Array<String> = ['home','about', 'lookbook', 'apply'];
  footerElement:Array<String> = ['terms','privacy'];
  state: string = 'small'
  constructor() {}
  animateMe(){
    this.state=(this.state === 'small' ? 'large' : 'small');
    // this.state=(this.state === 'norm' ? 'new' : 'norm');
  }
  ngOnInit() {
  }

}

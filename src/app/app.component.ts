import { Component } from '@angular/core';
import { trigger, state, style, transition, animation, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('myAwesomeAnimation',[
      state('small')
    ]),
  ]
})
export class AppComponent {
  title = 'app works!';
}

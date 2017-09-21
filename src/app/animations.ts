import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';


export const animation = trigger('myAwesomeAnimation',[
      state('small', style({
        transform: 'scale(.2)'
      })),
      state('large', style({
        transform: 'scale(1.5)'
      })),
      transition('small <=> large', animate('300ms ease-in')),

    ])

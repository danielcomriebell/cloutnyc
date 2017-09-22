import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';


export const animation = trigger('slideAnimation',[
      state('small', style({
        top: '150px'
      })),
      state('large', style({
        top: '100px'
      })),
      transition('small <=> large', animate('300ms ease-in')),

    ])

import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';


export const animation = trigger('slideAnimation',[
      state('small', style({
        transform: 'translateX(-100%)'
      })),
      state('large', style({
        transform: 'translateX(0%)'
      })),
      transition('small <=> large', animate('300ms ease-in')),

    ])

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export const animations = trigger(
  'modalState', [
    state('open', style({
      opacity: 1,
      transform: 'scale(1)'
    })),
    state('close', style({
      opacity: 0,
      transform: 'scale(1.1)'
    })),
    transition('* => open', [
      style({
        opacity: 0,
        transform: 'scale(1.1)'
      }),
      animate('100ms ease-in')
    ]),
    transition('* => close', animate('100ms ease-in'))
  ]
)

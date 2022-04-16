import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';

export class CommonAnimations {
  public static fadeIn = trigger('fadeIn', [
    transition(':enter', [
      style({ opacity: '0' }),
      animate('.3s', style({ opacity: '1' })),
    ]),
    transition(':leave', [animate('.3s', style({ opacity: '0' }))]),
  ]);
}

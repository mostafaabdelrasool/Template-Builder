import { Component, ViewEncapsulation } from '@angular/core';
import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';
import { AuthenticationService } from './core/data.api/auth.service';
export const slideInAnimation =
  trigger('routeAnimations', [

    transition('* => *', [

      query(':enter',
        [
          style({ opacity: 0 })
        ],
        { optional: true }
      ),

      query(':leave',
        [
          style({ opacity: 1 }),
          animate('0.5s', style({ opacity: 0 }))
        ],
        { optional: true }
      ),

      query(':enter',
        [
          style({ opacity: 0 }),
          animate('0.5s', style({ opacity: 1 }))
        ],
        { optional: true }
      )

    ])

  ]);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {

  constructor(public authenticationService:AuthenticationService) {

  }
  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}

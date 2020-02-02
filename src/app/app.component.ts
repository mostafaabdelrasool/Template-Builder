import { Component, ViewEncapsulation } from '@angular/core';
import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';
export const slideInAnimation =
  trigger('routeAnimations', [

    transition( '* => *', [

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
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None,
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}

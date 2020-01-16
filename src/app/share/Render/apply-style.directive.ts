import { Directive, Input, ElementRef } from '@angular/core';
import { Style } from 'src/app/model/field';
import { AppService } from './app.service';

@Directive({
  selector: '[appStyle]'
})
export class ApplyStyleDirective {

  constructor(private el: ElementRef, private appService: AppService) {
    appService.fieldStyleSubject.subscribe((x: Style) => {
      if (x &&  this.appStyle) {
        Object.keys(this.appStyle).forEach(key => {
          this.el.nativeElement.style[key] = this.appStyle[key]
        })
      }
    })
  }
  @Input('appStyle') appStyle: Style;

}

import { Directive, Input, ElementRef } from '@angular/core';
import { Style } from 'src/app/builder/model/field';
import { AppService } from './app.service';

@Directive({
  selector: '[appStyle]'
})
export class ApplyStyleDirective {

  constructor(private el: ElementRef, private appService: AppService) {

  }
  @Input('appStyle') set appStyle(value: Style) {
    if (value) {
      Object.keys(value).forEach(key => {
        this.el.nativeElement.style[key] = value[key]
      })
    }
  }

}

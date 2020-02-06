import { Directive, Input, ElementRef } from '@angular/core';
import { Style } from 'src/app/builder/model/field';
import { AppService } from './app.service';

@Directive({
  selector: '[appStyle]'
})
export class ApplyStyleDirective {
  _style: Style;
  constructor(private el: ElementRef, private appService: AppService) {
    this._style={};
  }
  @Input('appStyle') set appStyle(value: Style) {
    if (value) {
      // to detect change in fxFlex or style Object
      if (JSON.stringify(value.fxFlex) !== JSON.stringify(this._style.fxFlex)) {
        Object.keys(value.fxFlex).forEach(key => {
          this.el.nativeElement.setAttribute(key, value.fxFlex[key])
        })
      } else {
        Object.keys(value).forEach(key => {
          this.el.nativeElement.style[key] = value[key]
        })
      }
      this._style = {...value};
    }

  }

}

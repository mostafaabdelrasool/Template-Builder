import { Directive, Input, ElementRef } from '@angular/core';
import { Style } from 'src/app/builder/model/field';
import { AppService } from './app.service';

@Directive({
  selector: '[appStyle]'
})
export class ApplyStyleDirective {
  _style: Style;
  constructor(private el: ElementRef, private appService: AppService) {
    this._style = {};
  }
  @Input('appStyle') set appStyle(value: Style) {
    if (value) {
      // to detect change in fxFlex or style Object
      Object.keys(value).forEach(key => {
        this.el.nativeElement.style[key] = value[key]
      })
      if (value.fxFlex) {
        Object.keys(value.fxFlex).forEach(key => {
          this.applyFlex(key, value.fxFlex[key]);
        })
      }
    }

  }
  private applyFlex(key: string, value: string): boolean {
    if(this.appService.currentField.isContainer)
    this.el.nativeElement.style.display = "flex";
    switch (key) {
      case "fxLayout":
        this.el.nativeElement.style.flexDirection = value;
        return true;
      case "fxLayoutAlignV":
        this.el.nativeElement.style.alignContent = value;
        return true;
      case "fxLayoutAlignH":
        this.el.nativeElement.style.justifyContent = value;
        return true;
      case "fxFlexAlign":
        this.el.nativeElement.style.alignSelf = value;
        return true;
      case "fxFill":
        this.el.nativeElement.style.height = "100%";
        this.el.nativeElement.style.minHeight = "100%";
        this.el.nativeElement.style.minWidth = "100%";
        this.el.nativeElement.style.width = "100%";
        return true;
        case "wrap":
          this.el.nativeElement.style.flexWrap= "wrap";;
          return true;
      default:
        return false;
    }
  }

}

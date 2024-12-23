import { Directive, Input, ElementRef } from "@angular/core";
import { Fields } from "src/app/builder/model/field";
import { AppService } from "./app.service";
import { Style } from "../../model/style";
import objectKeysOfType from "src/app/utility/object-key";

@Directive({
  selector: "[appStyle]",
  standalone: false,
})
export class ApplyStyleDirective {
  _style: Style;
  constructor(private el: ElementRef, private appService: AppService) {
    this._style = {};
  }
  @Input() styleField: Fields;
  @Input("appStyle") set appStyle(value: Style) {
    if (value) {
      // to detect change in fxFlex or style Object
      const valueKey = objectKeysOfType(value);
      valueKey.forEach((key) => {
        if (key !== "fxFlex") {
          const val = (this.el.nativeElement.style[key] = value[key]);
        }
      });
      if (value.fxFlex) {
        objectKeysOfType(value.fxFlex).forEach((key) => {
          if (value.fxFlex?.[key]) {
            this.applyFlex(key, value.fxFlex[key] as string);
          }
        });
      }
    }
  }

  private applyFlex(key: string, value: string): boolean {
    if (
      (this.appService.currentField &&
        this.appService.currentField.isContainer) ||
      (this.styleField && this.styleField.isContainer)
    )
      this.el.nativeElement.style.display = "flex";
    switch (key) {
      case "fxLayout":
        this.el.nativeElement.style.flexDirection = value;
        return true;
      case "fxLayoutAlignV":
        this.el.nativeElement.style.alignItems = value;
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
        this.el.nativeElement.style.flexWrap = "wrap";
        return true;
      case "fxFlex":
        this.el.nativeElement.style.width = value + "%";
        return true;
      default:
        return false;
    }
  }
}

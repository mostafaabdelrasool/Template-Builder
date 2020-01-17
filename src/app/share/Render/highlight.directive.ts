import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    if (!this.highlightColor.disabled) {
      this.el.nativeElement.style.backgroundColor = color;
    }
  }
  @Input('appHighlight') highlightColor: HighlightSetting;
}
export interface HighlightSetting {
  color: HighlightColors;
  disabled: boolean;
}
export enum HighlightColors {
  YELLOW = 'yellow', BLUE = 'blue', RED = 'red'
}
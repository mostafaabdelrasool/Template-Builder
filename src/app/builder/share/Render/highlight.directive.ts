import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[appHighlight]',
    standalone: false
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    if (this.highlightColor) {
      this.highlight(this.highlightColor.color);
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(undefined);
  }

  private highlight(color?: HighlightColors) {
    if (!this.highlightColor.disabled) {
      this.el.nativeElement.style.border = color ? '1px dashed ' + color : null;

    }
  }
  @Input('appHighlight') highlightColor: HighlightSetting;
}

export interface HighlightSetting {
  color: HighlightColors;
  disabled?: boolean;
}

export enum HighlightColors {
  YELLOW = 'yellow', BLUE = '#00c4ff', RED = 'red', BLACK = 'black'
}
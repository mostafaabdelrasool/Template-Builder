import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[valueHandler]',
})
export class InputValueHandler {
    constructor(private el: ElementRef) {
    }
    @Input('valueHandler') set appStyle(value: any) {
        const currentValue = value || '';
        this.el.nativeElement.value = currentValue
    }
}
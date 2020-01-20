import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentCodeService {
  code: string;
  constructor() { }
  
  generate() {
    this.code = `
    export class MyClass {
    constructor(translate: TranslateService) {}`
  }
}

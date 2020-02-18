import { Injectable } from '@angular/core';
import { Containers } from 'src/app/builder/model/containers';

@Injectable({
  providedIn: 'root'
})
export class ComponentCodeService {
  code: string;
  constructor() { }
  generate(containers: Containers[],dependencies=''): string {
    this.code = `
  import { Component, OnInit } from "@angular/core";
  ${dependencies}
  @Component({
  selector: "app-angularMaterial",
  templateUrl: "./angularMaterial.component.html",
  styleUrls: ["./angularMaterial.component.scss"]
  })
  export class MyClass implements OnInit{
    constructor() {}
    ngOnInit() {

    }
    ${this.generateEvent(containers)}
  }`

    return this.code;
  }
  private generateEvent(containers: Containers[]): string {
    let code = '';
    containers.forEach(c => {
      c.fields.forEach(f => {
        f.fieldEvent.forEach(x => {
          code += `${x.name}($event){
          } \n`
        })
      })
    });
    return code;

  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentCodeService {
  code: string;
  constructor() { }

  generate(): string {
    this.code = `
  import { Component, OnInit } from "@angular/core";

  @Component({
  selector: "app-angularMaterial",
  templateUrl: "./angularMaterial.component.html",
  styleUrls: ["./angularMaterial.component.scss"]
  })
  export class MyClass implements OnInit{
    constructor() {}
    ngOnInit() {

    }
  }`
    return this.code;
  }
}

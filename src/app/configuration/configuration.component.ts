import { Component, OnInit } from '@angular/core';
import { Framework } from './model/language';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  selectedFramework: string

  constructor() {
    this.selectedFramework=Framework.Angular;
   }

  ngOnInit() {
  }

}

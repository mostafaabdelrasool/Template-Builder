import { Component, OnInit } from '@angular/core';
import { SharedService } from '../share/shared.service';

@Component({
    selector: 'app-configuration',
    templateUrl: './configuration.component.html',
    styleUrls: ['./configuration.component.scss'],
    standalone: false
})
export class ConfigurationComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
  }

}

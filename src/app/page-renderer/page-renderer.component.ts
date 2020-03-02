import { Component, OnInit } from '@angular/core';
import { Containers } from '../builder/model/containers';
import { SharedService } from '../share/shared.service';

@Component({
  selector: 'app-page-renderer',
  templateUrl: './page-renderer.component.html',
  styleUrls: ['./page-renderer.component.scss']
})
export class PageRendererComponent implements OnInit {
  containers: Containers[];
  data:any={};
  constructor(public sharedService:SharedService) {
   }

  ngOnInit() {
    this.getSetting();
    this.data[this.sharedService.instanceName]={};
  }
  getSetting() {
    this.containers = JSON.parse(localStorage.getItem("containers"));
  }

}

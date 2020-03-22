import { Component, OnInit, Input } from '@angular/core';
import { Containers } from '../builder/model/containers';
import { SharedService } from '../share/shared.service';
import { RenderService } from './render.service';

@Component({
  selector: 'app-page-renderer',
  templateUrl: './page-renderer.component.html',
  styleUrls: ['./page-renderer.component.scss']
})
export class PageRendererComponent implements OnInit {
  @Input()containers: Containers[];
  constructor(public sharedService: SharedService, public renderService: RenderService) {
  }

  ngOnInit() {
    this.getSetting();
    this.renderService.initData(this.sharedService.instanceName)
  }
  getSetting() {
    //in case of preview
    if (!this.containers) {
      this.containers = JSON.parse(localStorage.getItem("containers"));
    }
  }

}

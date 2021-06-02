import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Containers } from '../builder/model/containers';
import { FormFunction, FormLoadType } from '../builder/model/form-load-type';
import { SharedService } from '../share/shared.service';
import { RenderService } from './render.service';
import { FeatureSubmission } from './model/feature-submission';

@Component({
  selector: 'app-page-renderer',
  templateUrl: './page-renderer.component.html',
  styleUrls: ['./page-renderer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageRendererComponent implements OnInit {
  @Input() containers: Containers[];
  @Input() featureId: string;
  @Input() formFunction: FormFunction;
  constructor(public sharedService: SharedService, public renderService: RenderService) {
  }

  ngOnInit() {
    this.getSetting();
    this.renderService.initData();
    if (this.formFunction) {
      if (+this.formFunction.loadType === FormLoadType.LOAD_ALL_FEATURE) {
        this.renderService.loadAllFeatureData(this.featureId).subscribe((x: FeatureSubmission) => {
          if (x) {
            this.renderService.setArrayData(x.data, x.featureName);
          }
        });
      } else {

      }
    }
  }
  getSetting() {
    //in case of preview
    if (!this.containers) {
      this.containers = JSON.parse(localStorage.getItem("containers"));
    }
  }

}

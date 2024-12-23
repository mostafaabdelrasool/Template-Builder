import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { BaseComponent } from "src/app/core/base-component";
import { DataService } from "src/app/core/data.api/data.service";
import { TableSetting } from "src/app/share/table/model";
import { Feature } from "../model/feature";
import { FeatureSetting } from "../setting/feature.setting";

@Component({
    selector: "app-features",
    templateUrl: "./features.component.html",
    styleUrls: ["./features.component.scss"],
    standalone: false
})

export class FeaturesComponent extends BaseComponent<Feature> implements OnInit {

  features$: Observable<Feature[]>;
  tableSetting: TableSetting
  appId: string;
  constructor(public override dataService: DataService, private route: ActivatedRoute) {
    super("Feature", dataService)
    this.dataService._controller = "api/Feature";
    this.features$ = this.dataSubject.asObservable();
  }

  ngOnInit() {
    this.tableSetting = FeatureSetting.TableSetting;
    this.appId = this.route.snapshot.params['appId'];
    if (this.appId)
      this.loadWithFilter({ applicationId: this.appId });
  }
  addFeature = (data: Feature) => {
    if (this.appId && data) {
      data.applicationId = this.appId;
      this.save(data);
    }
  }
}

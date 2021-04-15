import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { BaseComponent } from "src/app/core/base-component";
import { DataService } from "src/app/core/data.api/data.service";
import { TableSetting } from "src/app/share/table/model";
import { Feature } from "../model/feature";
import { ApplicationsSetting } from "../setting/application.setting";

@Component({
  selector: "app-features",
  templateUrl: "./features.component.html",
  styleUrls: ["./features.component.scss"]
})

export class FeaturesComponent extends BaseComponent<Feature> implements OnInit {

  features$: Observable<Feature[]>;
  tableSetting: TableSetting
  constructor(public dataService: DataService, private route: ActivatedRoute) {
    super("Feature", dataService)
    this.dataService._controller = "api/Feature";
    this.features$ = this.dataSubject.asObservable();
  }

  ngOnInit() {
    this.tableSetting = ApplicationsSetting.TableSetting;
    const appId = this.route.snapshot.queryParamMap.get('appId');
    if (appId)
      this.loadWithFilter({ applicationId: appId });
  }
}

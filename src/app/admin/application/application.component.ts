import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { BaseComponent } from "src/app/core/base-component";
import { DataService } from "src/app/core/data.api/data.service";
import { TableSetting } from "src/app/share/table/model";
import { Applications } from "../model/applications";
import { ApplicationsSetting } from "../setting/application.setting";

@Component({
  selector: "app-application",
  templateUrl: "./application.component.html",
  styleUrls: ["./application.component.scss"]
})

export class ApplicationComponent extends BaseComponent<Applications> implements OnInit {

  applications$: Observable<Applications[]>;
  tableSetting: TableSetting
  constructor(public dataService: DataService) {
    super("Application", dataService)
    this.dataService._controller = "api/Application";
    this.applications$ = this.dataSubject.asObservable();
  }

  ngOnInit() {
    this.tableSetting = ApplicationsSetting.TableSetting;
    this.load();
  }
}

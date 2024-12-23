import {
  Component,
  OnInit,
  Input,
  AfterContentInit,
} from "@angular/core";
import { AppService } from "../../share/Render/app.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { TabField } from "../../model/field";
import { ContainersComponent } from "../../containers/containers.component";

@Component({
  selector: "app-tab-field",
  templateUrl: "./tab-field.component.html",
  styleUrls: ["./tab-field.component.scss"],
  standalone: false,
})
export class TabFieldComponent
  extends ContainersComponent
  implements OnInit, AfterContentInit
{
  @Input() field: TabField;
  constructor(
    public override appService: AppService,
    public snackBar: MatSnackBar
  ) {
    super(appService, snackBar);
  }
  ngAfterContentInit(): void {
    if (!this.field.tabs || this.field.tabs.length === 0) {
      this.field.tabs = [];
      let defaultContainer = this.appService.getDefaultContainer();
      if (defaultContainer.style) {
        defaultContainer.style.minHeight = "84%";
      }
      defaultContainer.containerId = this.field.containerId;
      this.field.tabs.push({ tabName: "first", container: defaultContainer });
      this.appService.addToContainers(defaultContainer);
    }
    if (this.field.style) {
      this.field.style.minHeight = "20em";
    }
    this.appService.updateFieldStyle(this.field);
  }

  addTab() {
    this.field.tabs.push({
      tabName: "Tab Name" + this.field.tabs.length,
      container: this.appService.getDefaultContainer(),
    });
  }
  removeTab(tab: any) {
    const index = this.field.tabs.indexOf(tab);
    this.field.tabs.splice(index, 1);
  }
}

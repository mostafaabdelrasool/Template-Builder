import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { AppService } from '../../share/Render/app.service';
import { MatSnackBar } from '@angular/material';
import { TabField } from '../../model/field';
import { ContainersComponent } from '../../containers/containers.component';

@Component({
  selector: "app-tab-field",
  templateUrl: "./tab-field.component.html",
  styleUrls: ["./tab-field.component.scss"]
})

export class TabFieldComponent extends ContainersComponent implements OnInit {
  @Input() field: TabField;
  constructor(public appService: AppService, public snackBar: MatSnackBar) {
    super(appService, snackBar)
  }

  ngOnInit() {
    if (!this.field.tabs || this.field.tabs.length === 0) {
      this.field.tabs = [];
      let defaultContainer = this.appService.getDefaultContainer();
      defaultContainer.style.minHeight = '84%';
      this.field.tabs.push({ tabName: 'first', container: defaultContainer });
      this.appService.addToContainers(defaultContainer);
    }
    this.field.style.minHeight = '20em';
    this.appService.updateFieldStyle(this.field);
  }
  addTab() {
    this.field.tabs.push({ tabName: 'Tab Name' + this.field.tabs.length, container: this.appService.getDefaultContainer() });
  }
  removeTab(tab) {
    const index = this.field.tabs.indexOf(tab);
    this.field.tabs.splice(index, 1);
  }
}

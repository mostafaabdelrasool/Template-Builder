import { Component, OnInit } from "@angular/core";
import { MatDialog, MatSnackBar } from '@angular/material';
import { AppService } from '../share/Render/app.service';
import { BuilderService } from '../builder.service';
import { ActivatedRoute } from '@angular/router';
import { ComponentConfigComponent } from "src/app/configuration/component-config/component-config.component";

@Component({
  selector: "app-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.scss"]
})

export class TopNavComponent implements OnInit {

  constructor(public dialog: MatDialog,
    public appService: AppService, private builderService: BuilderService,
    private route: ActivatedRoute, private _snackBar: MatSnackBar) { }
  ngOnInit() {

  }
  OpenManager(type) {
    if (type === 1) {
      this.appService.openFieldTypes = !this.appService.openFieldTypes;
    } else {
      this.appService.togglePropertiesSideBar();
    }
  }
  preview() {
    localStorage.setItem('containers', JSON.stringify(this.appService.containers))
    window.open(window.location.href.replace('builder', 'render'), '_blank')
  }
  save() {
    this.builderService.partialUpdate({
      id: this.route.snapshot.queryParams['id'],
      formSetting: JSON.stringify(this.appService.containers)
    }, ["formSetting"]).subscribe(x => {
      this.openSnackBar("Saved Successfully", "Close")
    });
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
  showDataStructure() {
    let setting = { width: '70vw', height: 'auto' };

    this.dialog.open(ComponentConfigComponent, setting);
  }
}

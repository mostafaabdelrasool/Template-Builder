import { Component, OnInit } from "@angular/core";
import { MatDialog, MatSnackBar } from '@angular/material';
import { AppService } from '../share/Render/app.service';
import { BuilderService } from '../builder.service';
import { ActivatedRoute } from '@angular/router';
import { ComponentConfigComponent } from "src/app/builder/component-config/component-config.component";

@Component({
  selector: "app-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.scss"]
})

export class TopNavComponent implements OnInit {
  formDataStructure: string;

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
    this.builderService.put({
      id: this.builderService.currentForm.id,
      formSetting: JSON.stringify(this.appService.containers),
      DataStructure: this.formDataStructure,
      name: this.builderService.currentForm.name
    }).subscribe(x => {
      this.openSnackBar("Saved Successfully", "Close")
    });
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
  showDataStructure() {
    let setting = { width: '70vw', height: 'auto', data: this.builderService.currentForm };
    this.dialog.open(ComponentConfigComponent, setting).afterClosed().subscribe(x => this.formDataStructure = x);
  }
}

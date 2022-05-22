import { Component, OnInit } from "@angular/core";
import { AppService } from '../share/Render/app.service';
import { BuilderService } from '../builder.service';
import { ActivatedRoute } from '@angular/router';
import { ComponentConfigComponent } from "src/app/builder/component-config/component-config.component";
import { FormLoadingComponent } from "../form-loading/form-loading.component";
import { FormLoadType } from "../model/form-load-type";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

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
    this.builderService.currentForm.formSetting = JSON.stringify(this.appService.containers);
    this.builderService.currentForm.formFunction = JSON.stringify(this.builderService.currentFormFunction);
    this.builderService.currentForm.dataStructure = this.formDataStructure;
    this.builderService.put(this.builderService.currentForm).subscribe(x => {
      this.openSnackBar("Saved Successfully", "Close")
    });
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
  showDataStructure() {
    let setting = { width: '70vw', height: 'auto', data: this.builderService.currentForm || {} };
    this.dialog.open(ComponentConfigComponent, setting).afterClosed().subscribe(x => {
      if (x) {
        this.formDataStructure = x;
        this.builderService.currentForm.dataStructure = this.formDataStructure;
      }
    });
  }
  initFormDialog() {
    let setting = { width: '70vw', height: 'auto', data: this.builderService.currentFormFunction.loadType || 0 };
    this.dialog.open(FormLoadingComponent, setting).afterClosed().subscribe((x) => {
      if (x) {
        this.builderService.currentFormFunction.loadType = x
      }
    });
  }
}

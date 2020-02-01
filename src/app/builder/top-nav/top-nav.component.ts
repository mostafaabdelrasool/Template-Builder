import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material';
import { CodePreviewComponent } from '../../code-generator/code-preview/code-preview.component';
import { Manager_Type } from '../model/manager';
import { ComponentCodeService } from '../../code-generator/angular/component-code.service';
import { HtmlCodeService } from '../../code-generator/angular/HtmlCodeService';
import { AppService } from '../share/Render/app.service';

@Component({
  selector: "app-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.scss"]
})

export class TopNavComponent implements OnInit {

  constructor(public dialog: MatDialog, public appService: AppService,
    componentCode: ComponentCodeService, private htmlCodeService: HtmlCodeService, 
    private componentCodeService: ComponentCodeService) { }
  generateCode(): void {
    const dialogRef = this.dialog.open(CodePreviewComponent, {
      width: '90vw',
      height: '90vh',
      data: {
        htmlCode: this.htmlCodeService.generate(this.appService.containers),
        tsCode: this.componentCodeService.generate(this.appService.containers)
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit() {

  }
  OpenManager(managerName: Manager_Type) {
    if (this.appService.currentManager === managerName) {
      this.appService.sidebarOpened = !this.appService.sidebarOpened;
    } else {
      this.appService.sidebarOpened = true;
    }
    this.appService.currentManager = managerName;

  }
}

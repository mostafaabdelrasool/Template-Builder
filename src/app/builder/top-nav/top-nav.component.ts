import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material';
import { CodePreviewComponent } from '../../code-generator/code-preview/code-preview.component';
import { Manager_Type } from '../model/manager';
import { ComponentCodeService } from '../../code-generator/angular/component-code.service';
import { HtmlCodeService } from '../../code-generator/angular/HtmlCodeService';
import { AppService } from '../share/Render/app.service';
import { SharedService } from 'src/app/share/shared.service';
import JsonToTS from 'src/app/share/json-parser';

@Component({
  selector: "app-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.scss"]
})

export class TopNavComponent implements OnInit {

  constructor(public dialog: MatDialog, public appService: AppService,
    private sharedService: SharedService, private htmlCodeService: HtmlCodeService,
    private componentCodeService: ComponentCodeService) { }
  generateCode(): void {
    let dependecies = [];
    const model = this.sharedService.model ?
      JsonToTS(this.sharedService.model, { rootName: this.sharedService.rootModelName }).map(x => {
        dependecies.push(this.getInterfaceName(x))
        return 'export ' + x;
      }).join('\n') : '';

    const dialogRef = this.dialog.open(CodePreviewComponent, {
      width: '90vw',
      height: '90vh',
      data: {
        htmlCode: this.htmlCodeService.generate(this.appService.containers),
        tsCode: this.componentCodeService.generate(this.appService.containers, `import {${dependecies.join(',')}} from './${this.sharedService.instanceName}'`),
        modelCode: model
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  getInterfaceName(interfaceCode: string): string {
    const instanceName = interfaceCode.split('\n')[0].replace('interface', '').replace('{','');
    return instanceName;
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

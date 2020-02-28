import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material';
import { CodePreviewComponent } from '../../code-generator/code-preview/code-preview.component';
import { Manager_Type } from '../model/manager';
import { CodeService } from '../share/Render/code-service.service';
import { AppService } from '../share/Render/app.service';

@Component({
  selector: "app-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.scss"]
})

export class TopNavComponent implements OnInit {

  constructor(public dialog: MatDialog, private codeService: CodeService,public appService:AppService) { }
  generateCode(): void {
    const dialogRef = this.dialog.open(CodePreviewComponent, {
      width: '90vw',
      height: '90vh',
      data: this.codeService.getAllCode()
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
  preview(){
   localStorage.setItem('containers',JSON.stringify(this.appService.containers)) 
   window.open(window.location.host+'/render','_blank') 
  }
}

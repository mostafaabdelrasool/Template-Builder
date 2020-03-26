import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material';
import { CodePreviewComponent } from '../../code-generator/code-preview/code-preview.component';
import { Manager_Type } from '../model/manager';
import { CodeService } from '../share/Render/code-service.service';
import { AppService } from '../share/Render/app.service';
import { BuilderService } from '../builder.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.scss"]
})

export class TopNavComponent implements OnInit {

  constructor(public dialog: MatDialog, private codeService: CodeService,
    public appService:AppService,private builderService: BuilderService,private route: ActivatedRoute) { }
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
  OpenManager(type) {
    if (type===1) {
      this.appService.openFieldTypes=!this.appService.openFieldTypes;
    } else {
      this.appService.openProperties=!this.appService.openProperties;
      
    }

  }
  preview(){
   localStorage.setItem('containers',JSON.stringify(this.appService.containers)) 
   window.open(window.location.href.replace('builder','render'),'_blank') 
  }
  save(){
    this.builderService.partialUpdate({id:+this.route.snapshot.queryParams['id'],
    formSetting:JSON.stringify(this.appService.containers)},["formSetting"]).subscribe(x=>{
      debugger
    });
  }
}

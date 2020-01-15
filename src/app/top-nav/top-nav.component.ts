import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material';
import { CodePreviewComponent } from '../code-generator/code-preview/code-preview.component';

@Component({
  selector: "app-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.scss"]
})

export class TopNavComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  generateCode() : void{
    const dialogRef = this.dialog.open(CodePreviewComponent, {
      width: '50vw',
      height:'50vh',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit() {

  }
}

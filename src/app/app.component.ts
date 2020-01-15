import { Component } from '@angular/core';
import { SanitizeHtmlPipe } from './share/Render/sanitizer';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ThrowStmt } from '@angular/compiler';
import { Fields, FieldType } from './model/field';
import { AppService } from './share/Render/app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(public appService: AppService) {

  }

}

import { Component, ViewEncapsulation } from '@angular/core';
import { AppService } from './share/Render/app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None

})
export class AppComponent {
 
  constructor(public appService: AppService) {

  }

}

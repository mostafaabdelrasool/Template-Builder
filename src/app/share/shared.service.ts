import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  model: any;
  cssCode:string='';
  constructor() {
   }

}

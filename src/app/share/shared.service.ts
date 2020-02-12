import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  model: any;
  selectedFrameWork: string="Angular";
  rootModelName:string="InterfaceName";
  instanceName:string="instanceName";
  constructor() { }

}

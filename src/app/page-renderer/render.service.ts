import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RenderService {
  data: any = {}
  constructor() { }
  initData(instanceName: string) {
    this.data[instanceName]={};
  }
}



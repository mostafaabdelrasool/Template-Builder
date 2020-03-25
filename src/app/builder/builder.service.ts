import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../core/data.api/data.service';

@Injectable({
  providedIn: 'root'
})
export class BuilderService  extends DataService{

  constructor(http: HttpClient) {
    super(http);
    this._controller = "api/Form"
  }

}

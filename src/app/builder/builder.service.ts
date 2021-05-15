import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../core/data.api/data.service';
import { Form } from './../admin/model/forms';

@Injectable({
  providedIn: 'root'
})
export class BuilderService extends DataService {
  currentForm: Form
  constructor(http: HttpClient) {
    super(http);
    this._controller = "api/Form"
  }
}

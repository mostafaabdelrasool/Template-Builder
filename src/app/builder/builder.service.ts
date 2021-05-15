import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../core/data.api/data.service';
import { Form } from './../admin/model/forms';
import { FormFunction } from './model/form-load-type';

@Injectable({
  providedIn: 'root'
})
export class BuilderService extends DataService {

  currentForm: Form
  currentFormFunction: FormFunction;
  constructor(http: HttpClient) {
    super(http);
    this._controller = "api/Form"
  }
  saveDataStructure(form: Form) {
    return this.http.post(this._url + this._controller + "/SaveFormDataStructure", form)
  }
}

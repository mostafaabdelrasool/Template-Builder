import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../core/data.api/data.service';
import { Form } from './../admin/model/forms';
import { FormFunction } from './model/form-load-type';
import { Observable } from 'rxjs';
import { Applications } from '../admin/model/applications';
import { Feature } from './../admin/model/feature';

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
  getApplications(): Observable<Applications[]> {
    return this.http.get<Applications[]>(this._url + "api/Application")
  }
  getFeatures(appId: string): Observable<Feature[]> {
    return this.http.get<Feature[]>(this._url + "api/Feature/GetFeatureApplication", { params: { applicationId: appId } })
  }
  getForms(featureId: string): Observable<Form[]> {
    return this.http.get<Form[]>(this._url + this._controller + "/GetFeatureForms", { params: { featureId: featureId } });
  }
}

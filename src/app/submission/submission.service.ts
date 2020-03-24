import { Injectable } from '@angular/core';
import { DataService } from '../core/data.api/data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService extends DataService {

  constructor(public http: HttpClient) {
    super(http);
    this._controller = "api/Submission"
  }
  getSubmissions() {
    return this.http.get(this._url + this._controller + "/GetSubmissions")
  }
  getForm(workflowId,formId) {
    let params = {  }
    if (workflowId) {
      params['workflowId']=workflowId
    }
    if (formId) {
      params['formId']=formId
    }
    return this.http.get(this._url + this._controller + "/GetSubmissionForm", {params:params });
  }
  getUserWorkflows() {
    return this.http.get(this._url + "api/Workflow/GetUserWorkflows");
  }
  submit(submission){
    return this.http.post(this._url + this._controller+"/Submit", submission);
  }
}

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
  getSubmissions(workflowId) {
    return this.http.get(this._url + this._controller + "/GetSubmissions",{params:{workflowId:workflowId}})
  }
  getForm(formId){
    return this.http.get(this._url + this._controller + "/GetSubmissionForm",{params:{formId:formId}});
  }
  getUserWorkflows(){
    return this.http.get(this._url + "api/Workflow/GetUserWorkflows");
  }
}

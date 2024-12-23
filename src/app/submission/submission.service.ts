import { Injectable } from "@angular/core";
import { DataService } from "../core/data.api/data.service";
import { HttpClient } from "@angular/common/http";
import { Submission } from "./model/submission";
import { workflow } from "../admin/model/workflow";
import { Form } from "../admin/model/forms";
import { SubmissionStep } from "./model/submission-step";

@Injectable({
  providedIn: "root",
})
export class SubmissionService extends DataService {
  constructor(override http: HttpClient) {
    super(http);
    this._controller = "api/Submission";
  }
  getSubmissions() {
    return this.http.get<Submission[]>(this._url + this._controller + "/GetSubmissions");
  }
  getForm(workflowId: number, stepId: number) {
    let params: any = {};
    if (workflowId) {
      params['workflowId'] = workflowId;
    }
    if (stepId) {
      params["stepId"] = stepId;
    }
    return this.http.get<SubmissionStep>(this._url + this._controller + "/GetSubmissionForm", {
      params: params,
    });
  }
  getUserWorkflows() {
    return this.http.get<workflow[]>(this._url + "api/Workflow/GetUserWorkflows");
  }
  submit(submission: Submission) {
    return this.http.post(this._url + this._controller + "/Submit", submission);
  }
}

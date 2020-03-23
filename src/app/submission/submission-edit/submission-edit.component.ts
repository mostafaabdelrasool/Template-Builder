import { Component, OnInit } from "@angular/core";
import { SubmissionService } from '../submission.service';
import { Submission } from '../model/submission';
import { ActivatedRoute } from '@angular/router';
import { Containers } from 'src/app/builder/model/containers';
import { SubmissionStep } from '../model/submission-step';

@Component({
  selector: "app-submission-edit",
  templateUrl: "./submission-edit.component.html",
  styleUrls: ["./submission-edit.component.scss"]
})

export class SubmissionEditComponent implements OnInit {
  submission: Submission;
  step: SubmissionStep=new SubmissionStep();
  containers:Containers[];
  constructor(public submissionService: SubmissionService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    if (this.route.snapshot.params['id']) {
      this.submissionService.getById(this.route.snapshot.params['id']).subscribe((x: Submission) => {
        this.submission = x;
        this.getForm(0,x.formId)
      });
    }else{
      this.getForm(this.route.snapshot.params['workflowId'])
    }
    this.step.stepActions=[];
  }
  getForm(workflowId=null,formId=null){
    this.submissionService.getForm(workflowId,formId).subscribe((x: SubmissionStep) => {
      this.step = x;
      if(x.formSetting)
      this.containers=JSON.parse(x.formSetting)
    });
  }
  submit(){

  }
}
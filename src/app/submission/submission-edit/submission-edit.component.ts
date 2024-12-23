import { Component, OnInit } from "@angular/core";
import { SubmissionService } from '../submission.service';
import { Submission } from '../model/submission';
import { ActivatedRoute, Router } from '@angular/router';
import { Containers } from 'src/app/builder/model/containers';
import { SubmissionStep } from '../model/submission-step';
import { RenderService } from 'src/app/page-renderer/render.service';

@Component({
    selector: "app-submission-edit",
    templateUrl: "./submission-edit.component.html",
    styleUrls: ["./submission-edit.component.scss"],
    standalone: false
})

export class SubmissionEditComponent implements OnInit {
  submission: Submission=new Submission();
  step: SubmissionStep = new SubmissionStep();
  containers: Containers[];
  constructor(public submissionService: SubmissionService, private route: ActivatedRoute,
    private renderService: RenderService, private router: Router) {

  }

  ngOnInit() {
    this.renderService.data={};
    if (this.route.snapshot.params['id']) {
      this.submissionService.getById<Submission>(this.route.snapshot.params['id']).subscribe((x: Submission) => {
        this.submission = x;
        this.getForm(0, x.currentStepId);
        if (this.submission.data) {
          this.renderService.data=JSON.parse(this.submission.data);
        }
      });
    } else {
      this.getForm(this.route.snapshot.params['workflowId'])
    }
    this.step.stepActions = [];
  }
  getForm(workflowId:number = 0, stepId: number = 0) {
    this.submissionService.getForm(workflowId, stepId).subscribe((x: SubmissionStep) => {
      this.step = x;
      if (x.formSetting)
        this.containers = JSON.parse(x.formSetting)
    });
  }
  submit(actionId: number) {
    this.submission.data=JSON.stringify(this.renderService.data);
    if (!this.route.snapshot.params['id']) {
      this.submission.workFlowId= +this.route.snapshot.params['workflowId'];
      this.submission.currentStepId=this.step.currentStepId;
      this.submission.formId=this.step.formId;
      this.submission.nextStepId=this.step.nextStepId;
    }
    this.submission.actionId=actionId;
    this.submissionService.submit(this.submission).subscribe(() => {
      this.renderService.data={};
      this.router.navigate(['submission']);
    });
  }
}

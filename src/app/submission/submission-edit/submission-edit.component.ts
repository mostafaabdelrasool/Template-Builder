import { Component, OnInit } from "@angular/core";
import { SubmissionService } from '../submission.service';
import { Submission } from '../model/submission';
import { ActivatedRoute } from '@angular/router';
import { Containers } from 'src/app/builder/model/containers';

@Component({
  selector: "app-submission-edit",
  templateUrl: "./submission-edit.component.html",
  styleUrls: ["./submission-edit.component.scss"]
})

export class SubmissionEditComponent implements OnInit {
  submission: Submission;
  containers: Containers[];
  constructor(public submissionService: SubmissionService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.submissionService.getById(this.route.snapshot.queryParams['id']).subscribe((x: Submission) => {
      this.submission = x;
    });
    this.submissionService.getForm(this.route.snapshot.queryParams['formId']).subscribe((x: Containers[]) => {
      this.containers = x;
    });
  }
}

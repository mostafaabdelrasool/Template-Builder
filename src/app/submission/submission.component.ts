import { Component, OnInit } from '@angular/core';
import { Submission } from './model/submission';
import { SubmissionService } from './submission.service';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})
export class SubmissionComponent implements OnInit {
  submissions: Submission[] = [];
  search:string;
  constructor(public submissionService: SubmissionService) { }

  ngOnInit() {
    this.submissionService.getSubmissions().subscribe((x: Submission[]) => {
      this.submissions = x;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Submission } from './model/submission';
import { SubmissionService } from './submission.service';
import { workflow } from '../admin/model/workflow';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})
export class SubmissionComponent implements OnInit {
  submissions: Submission[] = [];
  sidebarOpened: boolean = false;
  search: string;
  workflows: workflow[] = [];
  currentWorkflowId:number=0;
  constructor(public submissionService: SubmissionService,private router:Router) { }

  ngOnInit() {
    this.submissionService.getUserWorkflows().subscribe((x: workflow[]) => {
      this.workflows = x;
      if (x.length>0) {
        this.getWorkflowSubmissions(x[0].id)
      }
    })
  }
  getWorkflowSubmissions(workflowId) {
    this.currentWorkflowId=workflowId;
    this.submissionService.getSubmissions(workflowId).subscribe((x: Submission[]) => {
      this.submissions = x;
    })
  }
  createNew(){
    this.router.navigate(['/submissione-edit',this.currentWorkflowId,0])
  }
}

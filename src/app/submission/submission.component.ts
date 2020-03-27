import { Component, OnInit, ViewChild } from '@angular/core';
import { Submission } from './model/submission';
import { SubmissionService } from './submission.service';
import { workflow } from '../admin/model/workflow';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

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
  @ViewChild('sidenav',{static:true}) sidenav: MatSidenav;
  constructor(public submissionService: SubmissionService,private router:Router) { }

  ngOnInit() {
    this.submissionService.getUserWorkflows().subscribe((x: workflow[]) => {
      if (x) {
        this.workflows = x;
        this.currentWorkflowId= x[0].id;
      }
    })
    this.getWorkflowSubmissions(this.currentWorkflowId)
  }
  getWorkflowSubmissions(workflowId) {
    this.submissionService.getSubmissions(workflowId).subscribe((x: Submission[]) => {
      this.submissions = x;
    })
  }
  createNew(){
    this.router.navigate(['/submission-edit',this.currentWorkflowId])
  }
  closeSidebar(){
    this.sidenav.close();
  }
}

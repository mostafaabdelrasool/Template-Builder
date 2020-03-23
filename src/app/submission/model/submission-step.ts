import { StepActions } from 'src/app/admin/model/step-action';

export class SubmissionStep{
    formId?:number;
    name:string;
    formSetting?:string;
    stepName :string;
    workflowsId :number;
    stepId :number;
    nextStepId :number;
    stepActions?:StepActions[]
}
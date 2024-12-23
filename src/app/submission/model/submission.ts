export class Submission {
    id:string;
    currentStepId: number;
    previousStepId?: number;
    nextStepId?: number;
    actorId?: number;
    assignToGroupId?: number;
    assignToPositionId?: number;
    actionId: number;
    workFlowId: number;
    formId?: number;
    creatorId?: number;
    stepName?: string;
    workflowName?: string;
    number?: string;
    data: string;
}
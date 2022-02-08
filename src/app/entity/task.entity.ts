export interface TaskEntity {

    taskId: number;
    taskName: string;
    taskContent: string;
    taskState: number;
    endTime: Date | number;
    researchId: number;
    researchName: string;
}

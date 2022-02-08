export class UpdateTaskForm {

    constructor(
        public taskId: number,
        public researchId: number,
        public taskName: string,
        public taskContent: string,
        public taskState: number,
        public endTime: Date | null
    ) { }
}

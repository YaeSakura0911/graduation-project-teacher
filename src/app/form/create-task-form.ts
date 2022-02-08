export class CreateTaskForm {
    
    constructor(
        public researchId: number,
        public taskName: string,
        public taskContent: string
    ) { }
}
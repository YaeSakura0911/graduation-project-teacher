export class QueryTaskListForm {

    constructor(
        public teacherId: number,
        public researchId: number,
        public taskName: string,
        public taskState: number,

        public pageIndex: number,
        public pageSize: number,
    ) { }
}
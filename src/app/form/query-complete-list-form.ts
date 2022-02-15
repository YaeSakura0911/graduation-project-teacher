export class QueryCompleteListForm {

    constructor(
        public taskId: number,
        public researchId: number,
        public pageIndex: number,
        public pageSize: number
    ) {
    }
}

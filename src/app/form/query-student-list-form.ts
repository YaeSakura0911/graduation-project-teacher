export class QueryStudentListForm {

    constructor(
        public teacherId: number,
        public studentName: string,
        public researchId: number,
        public studentYear: Date | number,
        public pageIndex: number,
        public pageSize: number,
        public total: number
    ) { }
}
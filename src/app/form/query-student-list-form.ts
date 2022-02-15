export class QueryStudentListForm {

    constructor(
        public teacherId: number,
        public studentName: string,
        public researchId: number,
        public studentYear: Date | null,
        public pageIndex: number,
        public pageSize: number
    ) { }
}

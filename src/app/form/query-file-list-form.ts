export class QueryFileListForm {

    constructor(
        public teacherId: number,
        public researchId: number,
        public fileName: string,
        public pageIndex: number,
        public pageSize: number
    ) {
    }
}

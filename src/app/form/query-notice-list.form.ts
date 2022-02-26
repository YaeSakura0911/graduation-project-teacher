export class QueryNoticeListForm {

    constructor(
        public teacherId: number,
        public noticeTitle: string,
        public noticePriority: number,
        public noticeState: number,
        public pageIndex: number,
        public pageSize: number
    ) {
    }
}

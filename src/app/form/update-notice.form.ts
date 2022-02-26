export class UpdateNoticeForm {

    constructor(
        public teacherId: number,
        public noticeId: number,
        public noticeTitle: string,
        public noticePriority: number,
        public noticeContent: string,
        public releaseFlag: number
    ) {
    }
}

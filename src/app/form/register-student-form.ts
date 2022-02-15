export class RegisterStudentForm {

    constructor(
        public studentName: string,
        public studentYear: Date | null,
        public studentGender: number,
        public researchId: number
    ) { }
}

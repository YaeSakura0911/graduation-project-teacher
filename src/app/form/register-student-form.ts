export class RegisterStudentForm {

    constructor(
        public studentName: string,
        public studentYear: Date | number,
        public studentGender: number,
        public researchId: number
    ) { }
}
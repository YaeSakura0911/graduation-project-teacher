export class UpdateTeacherForm {

    constructor(
        public teacherId: string | number,
        public teacherTelephone: string,
        public teacherEmail: string,
        public teacherGender: number
    ) { }
}
export class UpdateResearchForm {

    constructor(
        public teacherId: number,
        public researchId: number,
        public researchName: string,
        public researchDescription: string
    ) { }
}
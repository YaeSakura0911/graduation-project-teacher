export class UserInfoForm {

    public userId: string;
    public userGender: string;
    public userTelephone: string;
    public userEmail: string;
    public userPassword: string;

    constructor(userId: string, userGender: string, userTelephone: string, userEmail: string, userPasword: string) {
        this.userId = userId;
        this.userGender = userGender;
        this.userEmail = userEmail;
        this.userTelephone = userTelephone;
        this.userPassword = userPasword;
    }
}
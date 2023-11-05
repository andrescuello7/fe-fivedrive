import { saveToLocalStorage } from "@/utils/localStorage";
import { ContentTypeEnum } from "enums/ContentTypeEnum";
import UserModel from "@/model/UserModel";

let instance: any | null = null;

export class UserFactory {
    private userModel: UserModel = new UserModel();

    constructor() { }

    static Initial() {
        if (!instance) {
            instance = new UserFactory();
        }
        return instance;
    }

    getUserModel(): UserModel {
        return this.userModel;
    }

    setUserModel(model: UserModel) {
        this.userModel = model;
        saveToLocalStorage({
            key: ContentTypeEnum.User,
            value: btoa(JSON.stringify(model))
        })
    }
}
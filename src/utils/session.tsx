import { PageNames } from "../../enums/pageEnum";
import { readFromLocalStorage, removeLocalStorage } from "./localStorage";


export const sessionToken = () => {
    const token: string = readFromLocalStorage("token");
    if (token == undefined) {
        window.location.href = PageNames.LOGIN
    }
}
export const sessionFinished = () => {
    removeLocalStorage("token");
    window.location.href = PageNames.LOGIN
}
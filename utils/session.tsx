import { PageNames } from "../enums/page_enum";
import { getItem, rmItem } from "./localStorage";


export const sessionToken = () => {
    const token: string = getItem("token");
    if (token == undefined) {
        window.location.href = PageNames.LOGIN
        // router.push('/login');
    }
}
export const sessionFinished = () => {
    rmItem("token");
    window.location.href = PageNames.LOGIN
    // router.push('/login');
}
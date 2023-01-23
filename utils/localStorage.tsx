export const getItem = (key: string) => {
    if (typeof window !== 'undefined') {
        return JSON.parse(localStorage.getItem(key)!) || null;
    }
    return undefined;
}
export const setItem = (key: string, json?: Object) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(json));
    }
}
export const rmItem = (key: string) => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(key);
    }
}
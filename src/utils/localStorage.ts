interface tokenData {
  key: string;
  value: string;
}

export function saveToLocalStorage(objet: tokenData) {
  if (typeof window !== "undefined") {
    const dataJson = JSON.stringify(objet.value);
    localStorage.setItem(objet.key, dataJson);
  } else {
    return null;
  }
}

export function readFromLocalStorage(key: string) {
  if (typeof window !== "undefined") {
    const json = localStorage.getItem(key);
    const data = JSON.parse(json!);
    return data;
  } else {
    return null;
  }
}

export const removeLocalStorage = (key: string) => {
  if (typeof window !== "undefined") {
    return localStorage.removeItem(key);
  }
};

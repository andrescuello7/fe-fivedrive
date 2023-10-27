import { readFromLocalStorage } from "@/utils/localStorage";
import { ContentTypeEnum } from "enums/ContentTypeEnum";
import AuthModel from "model/AuthModel";

const token = readFromLocalStorage(ContentTypeEnum.Token)

export async function FindAllUsers() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/users`);
  if (!response.ok) {
    throw new Error("Error");
  }
  const users = await response.json();
  return users;
}

export async function Authentication(model: AuthModel) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/api/auth`, {
    method: "POST",
    body: JSON.stringify(model),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Error");
  }
  const auth = await response.json();
  return auth;
}

export async function GetAuthentication(tokenAuth: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/user/auth`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${tokenAuth}`
    },
  });
  if (!response.ok) {
    throw new Error("Error");
  }
  const auth = await response.json();
  return auth;
}
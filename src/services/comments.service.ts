import { readFromLocalStorage } from "@/utils/localStorage";
import { ContentTypeEnum } from "enums/ContentTypeEnum";
import CommentModel from "@/model/CommentModel";

const token = readFromLocalStorage(ContentTypeEnum.Token)

export async function CreateComment(comment: CommentModel) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/comment`, {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  });
  if (!response.ok) {
    throw new Error("Error");
  }
  const result = await response.json();
  return result;
}

export async function FindForPostId(id: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}api/comment/post/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    }
  );
  if (!response.ok) {
    throw new Error("Error");
  }
  const auth = await response.json();
  return auth;
}

export async function FindById(id: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}api/comment/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    }
  );
  if (!response.ok) {
    throw new Error("Error");
  }
  const post = await response.json();
  return post;
}

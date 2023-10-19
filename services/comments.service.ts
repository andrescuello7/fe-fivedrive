import CommentModel from "model/CommentModel";

export async function FindAllPosts() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Error");
  }
  const users = await response.json();
  return users;
}

export async function CreateComment(comment: CommentModel) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}comment`, {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json",
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
    `${process.env.NEXT_PUBLIC_API_URL}comment/post/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Error");
  }
  const auth: any = await response.json();
  return auth;
}

export async function FindById(id: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}comment/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Error");
  }
  const post = await response.json();
  return post;
}

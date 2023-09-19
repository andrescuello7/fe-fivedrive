import AuthModel from "model/AuthModel";

export async function getUsers() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}users`);
  if (!response.ok) {
    throw new Error("Error");
  }
  const users = await response.json();
  return users;
}

export async function Authentication(model: AuthModel) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}authentication`, {
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

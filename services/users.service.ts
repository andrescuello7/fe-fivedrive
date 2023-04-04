export async function getUsers() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}users`);
  if (!response.ok) {
    throw new Error("Error");
  }
  const users = await response.json();
  return users;
}

export async function createUsers(data: any) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}users`, {
    method: "POST",
    body: JSON.stringify(data),
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

export async function updateUsers(data: any, id: any) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}users/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
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

export async function deleteUsers(id: any) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}users/${id}`,
    {
      method: "DELETE",
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

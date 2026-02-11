"use server";

import { getUserRole } from "./getUserRole";

export async function isUserAdmin(): Promise<boolean> {
  try {
    const roles = await getUserRole();
    return roles.some((role) => role.name.toLowerCase() === "admin");
  } catch (error) {
    return false;
  }
}

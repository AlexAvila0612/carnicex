"use client";

import { authClient } from "@/auth-client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function logout() {
    await authClient.signOut();
    router.push("/login");
  }

  return (
    <button onClick={logout}>
      Cerrar sesión
    </button>
  );
}
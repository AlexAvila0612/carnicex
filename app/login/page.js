"use client";

import { authClient } from "@/auth-client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registrar() {
  try {
    const result = await authClient.signUp.email({
      email,
      password,
      name: email,
    });

    console.log("REGISTER RESULT:", result);
    alert("Usuario creado correctamente");
  } catch (error) {
    console.error(error);
    alert("Error al crear usuario");
  }
}

  async function login() {
  try {
    const result = await authClient.signIn.email({
      email,
      password,
    });

    console.log("LOGIN RESULT:", result);
    alert("Login correcto");
  } catch (error) {
    console.error(error);
    alert("Error en login");
  }
}

async function verSesion() {
  const res = await fetch("/api/auth/get-session");
  const data = await res.json();

  console.log(data);

  if (!data) {
    alert("No autenticado");
    return;
  }

  alert(data.user.email);
}

async function logout() {
  await authClient.signOut();

  alert("Sesión cerrada");
}
  return (
    <main style={{ padding: "20px" }}>
      <h1>Login Carnicex</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={registrar}>
        Registrarse
      </button>

      <br /><br />

      <button onClick={login}>
        Iniciar sesión
      </button>

      <br /><br />

<button onClick={verSesion}>
  Ver sesión
</button>

      <br /><br />

<button onClick={logout}>
  Cerrar sesión
</button>
    </main>
  );
}
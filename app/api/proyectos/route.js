import { getDB } from "@/lib/db";

export async function GET() {
  const db = await getDB();

  const proyectos = await db.all(
    "SELECT * FROM proyectos"
  );

  return Response.json(proyectos);
}

export async function POST(request) {
  const db = await getDB();

  const body = await request.json();

  await db.run(
    "INSERT INTO proyectos (titulo, descripcion) VALUES (?, ?)",
    [body.titulo, body.descripcion]
  );

  return Response.json({
    mensaje: "Proyecto creado",
  });
}
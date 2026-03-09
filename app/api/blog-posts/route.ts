import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const GHOST_URL = "https://blog.mertozek.me";
const GHOST_ADMIN_KEY = process.env.GHOST_ADMIN_API_KEY || "";

function generateToken() {
  const [id, secret] = GHOST_ADMIN_KEY.split(":");
  if (!id || !secret) return null;

  const token = jwt.sign({}, Buffer.from(secret, "hex"), {
    algorithm: "HS256",
    expiresIn: "5m",
    audience: "/admin/",
    keyid: id,
  });

  return token;
}

export async function GET() {
  try {
    const token = generateToken();
    if (!token) {
      return NextResponse.json({ posts: [] });
    }

    const res = await fetch(
      `${GHOST_URL}/ghost/api/admin/posts/?limit=3&fields=title,slug,excerpt,published_at,feature_image&order=published_at%20desc`,
      {
        headers: { Authorization: `Ghost ${token}` },
        next: { revalidate: 3600 }, // Cache 1 hour
      }
    );

    if (!res.ok) {
      return NextResponse.json({ posts: [] });
    }

    const data = await res.json();
    return NextResponse.json({ posts: data.posts || [] });
  } catch {
    return NextResponse.json({ posts: [] });
  }
}

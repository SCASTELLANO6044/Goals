import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createClient } from "@/lib/supabase/server";

export async function PUT(request: Request) {
  const body = await request.json();
  const username = body.username?.toString() ?? "";
  const bio = body.bio?.toString() ?? "";

  const supabase = await createClient(cookies());
  const { data, error } = await supabase.auth.updateUser({
    data: {
      username,
      bio,
    },
  });

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 },
    );
  }

  return NextResponse.json({ user: data.user });
}

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const token = (await cookies()).get("auth-token")?.value;

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users/current`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      },
    );

    const { data } = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { message: data.message || "Gagal fetch current user" },
        { status: res.status },
      );
    }

    const response = NextResponse.json({
      user: {
        email: data.email,
        name: data.name,
        service_type: data.service_type,
      },
      message: "Berhasil fetch current user",
    });

    return response;
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "็Hathairat Promchauy",
    studentId: "660610804",
  });
};

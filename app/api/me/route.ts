import { NextRequest, NextResponse } from "next/server";

export default function GET(req: NextRequest) {
   return NextResponse.json({ user: req.cookies.get("token")?.value });
}

import { NextResponse } from "next/server";

export function middleware(request, response) {
  return NextResponse.next();
}

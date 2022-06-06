import { NextResponse } from 'next/server';

export default function middleware(req) {
  const { pathname, origin } = req.nextUrl;

  if (pathname.startsWith('/suggestion')) {
    const token = req.cookies[process.env.COOKIE];

    if (!token) {
      return NextResponse.redirect(`${origin}/`);
    }
  }
}

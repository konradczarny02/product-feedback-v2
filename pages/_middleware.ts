import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export default function middleware(req: NextRequest) {
  const { pathname, origin } = req.nextUrl;

  if (pathname.startsWith('/suggestion')) {
    const token = req.cookies[process.env.COOKIE];

    if (!token) {
      return NextResponse.redirect(`${origin}/`);
    }
  }
}

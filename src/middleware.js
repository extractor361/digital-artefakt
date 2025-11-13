import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl;

  // Ako postoji BILO KOJI query parametar → vrati 404
  if ([...url.searchParams.keys()].length > 0) {
    return new NextResponse('Not Found', { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};

import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl;

  // Blokiraj samo URL-ove koji imaju parametar "_g"
  if (url.searchParams.has('_g')) {
    return new NextResponse('Not Found', { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};

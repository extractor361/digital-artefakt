import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl;

  // Ako URL ima query parametar "_g" → vrati 404
  if (url.searchParams.has('_g')) {
    return new NextResponse('Not Found', { status: 404 });
  }

  // Inače idi dalje
  return NextResponse.next();
}

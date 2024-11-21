import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  
  if (body.username === 'admin' && body.password === 'password') {
    return NextResponse.json({ message: 'Login successful' });
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}
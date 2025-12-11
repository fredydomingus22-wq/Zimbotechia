import { NextResponse } from 'next/server';
import { createServerClient } from '../../../../lib/supabase/server';

interface AuthPayload {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const { email, password } = (await request.json()) as Partial<AuthPayload>;

  if (!email || !password) {
    return NextResponse.json(
      { error: 'Email e palavra-passe são obrigatórios.' },
      { status: 400 },
    );
  }

  const supabase = createServerClient();
  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    return NextResponse.json(
      { error: error.message ?? 'Não foi possível criar a conta.' },
      { status: 400 },
    );
  }

  return NextResponse.json({ success: true });
}

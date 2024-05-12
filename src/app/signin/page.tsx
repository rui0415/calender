"use client"
import { Auth } from "@supabase/auth-ui-react";
import { createClient } from "../../../utils/supabase/client";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function Login() {

  const supabase = createClient()
  return (
    <div>
      <Auth
        supabaseClient={supabase}
        providers={["github"]}
        appearance={{theme:ThemeSupa}}
        redirectTo="http://localhost:3000/auth/callback"
      />
    </div>
  )
}

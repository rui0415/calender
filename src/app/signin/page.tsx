"use client"
import { Auth } from "@supabase/auth-ui-react";
import { createClient } from "../../../utils/supabase/client";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function Login() {

  const supabase = createClient()
  const getURL = () => {
    let url =
      process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
      process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
      'http://localhost:3000/auth/callback'
    // Make sure to include `https://` when not localhost.
    url = url.includes('http') ? url : `https://${url}`
    // Make sure to include a trailing `/`.
    url = url.charAt(url.length - 1) === '/' ? url : `${url}/`
    return url
  }
  return (
    <div>
      <Auth
        supabaseClient={supabase}
        providers={["github"]}
        appearance={{theme:ThemeSupa}}
        redirectTo={getURL()}
      />
    </div>
  )
}

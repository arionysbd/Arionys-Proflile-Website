import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

// Handles Supabase email confirmation / magic link callbacks
export async function GET(request: NextRequest) {
  const supabase = await createClient()
  if (!supabase) {
    return NextResponse.redirect((process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000") + "/")
  }

  try {
    // Exchange the code from the email link for a session; this also verifies the email
    const {
      data: { session },
      error,
    } = await supabase.auth.exchangeCodeForSession(request.nextUrl)

    if (error) {
      console.error("Auth callback error:", error)
    } else {
      // Session is set via cookies by the server client
      if (session?.user?.email_confirmed_at) {
        // Email is confirmed
      }
    }
  } catch (e) {
    console.error("Auth callback exception:", e)
  }

  // Always redirect to the main site (home). You can change to /dashboard if desired
  const redirectTo = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  return NextResponse.redirect(redirectTo + "/auth/login")
}



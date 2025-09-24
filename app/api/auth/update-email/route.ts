import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { createServiceRoleClient } from "@/lib/supabase/service-role"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}))
    const { email } = body || {}
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const supabase = await createClient()
    if (!supabase) {
      return NextResponse.json({ error: "Auth not available" }, { status: 500 })
    }

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()
    if (userError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const admin = createServiceRoleClient()
    // Update auth user email without confirmation (no OTP)
    const { data: updatedUser, error: adminError } = await admin.auth.admin.updateUserById(user.id, { email })
    if (adminError) {
      console.error("Admin update email error:", adminError)
      return NextResponse.json({ error: adminError.message || "Failed to update email" }, { status: 400 })
    }

    // Keep profiles table in sync
    const { error: profileError } = await supabase.from("profiles").update({ email }).eq("id", user.id)
    if (profileError) {
      console.error("Profile email sync error:", profileError)
      // Non-fatal; still return success for auth
    }

    return NextResponse.json({ success: true, user: { id: updatedUser.user?.id, email: updatedUser.user?.email } })
  } catch (e: any) {
    console.error("Update email endpoint error:", e)
    return NextResponse.json({ error: e?.message || "Unexpected error" }, { status: 500 })
  }
}



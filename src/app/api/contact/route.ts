import { NextResponse } from "next/server"
import * as z from "zod"

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    
    // Validate request data
    const result = contactSchema.safeParse(body)
    
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data provided", details: result.error.errors },
        { status: 400 }
      )
    }

    const { name, email, phone, subject, message } = result.data

    // Here we would integrate with an email provider like Resend
    // For now, we simulate a successful API call
    console.log("New contact submission:", { name, email, phone, subject, message })
    
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json(
      { success: true, message: "Your message has been sent successfully." },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    )
  }
}

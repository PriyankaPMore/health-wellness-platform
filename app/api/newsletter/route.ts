import { NextRequest, NextResponse } from "next/server"

interface NewsletterSubmission {
  email: string
}

let submissions: NewsletterSubmission[] = [] // Mock storage

export async function POST(req: NextRequest) {
  try {
    const data: NewsletterSubmission = await req.json()

    if (!data.email || !data.email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    }

    submissions.push(data) // Store submission in mock DB
    return NextResponse.json({ message: "Successfully subscribed!" })
  } catch (err) {
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 })
  }
}
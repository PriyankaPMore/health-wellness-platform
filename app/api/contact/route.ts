import { NextRequest, NextResponse } from "next/server"

interface ContactSubmission {
  name: string
  email: string
  message: string
}

let submissions: ContactSubmission[] = [] // Mock storage

export async function POST(req: NextRequest) {
  try {
    const data: ContactSubmission = await req.json()

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    submissions.push(data) // Store submission
    return NextResponse.json({ message: "Message sent successfully!" })
  } catch (err) {
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 })
  }
}
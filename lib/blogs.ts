export type Blog = {
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  date: string
}

export const blogs: Blog[] = [
  {
    slug: "benefits-of-magnesium",
    title: "Why Magnesium is Essential for Sleep",
    excerpt: "Magnesium plays a crucial role in supporting deep sleep and muscle recovery.",
    image: "/images/blog-magnesium.jpg",
    date: "2024-04-10",
    content: `
Magnesium is an essential mineral involved in more than 300 biochemical processes in the body.

Benefits include:
• Improved sleep quality
• Reduced muscle cramps
• Stress reduction

Supplementing magnesium can help individuals who experience fatigue or poor sleep.
    `,
  },
  {
    slug: "vitamin-d-immunity",
    title: "How Vitamin D Supports Immunity",
    excerpt: "Vitamin D plays a major role in strengthening your immune system.",
    image: "/images/blog-vitaminD.jpg",
    date: "2024-04-12",
    content: `
Vitamin D helps regulate immune function and supports bone health.

Low vitamin D levels are linked with:
• Weak immunity
• Fatigue
• Mood changes

Daily supplementation may improve overall wellness.
    `,
  },
]
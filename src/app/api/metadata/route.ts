import { NextResponse } from 'next/server'

export async function GET() {
  const metadata = {
    title: "Creator Lab 2024 🚀 Nhận Miễn Phí 39.338 Triệu VNĐ | 33+ AI Tools",
    description: "🎉 MIỄN PHÍ 100%! Gói Creator Lab 2024 trị giá 39.338 triệu VNĐ ✨ 33+ AI Tools (ChatGPT Premium, Canva Pro, Midjourney...) ⚡ Thu nhập 20% không giới hạn ⭐ Level System với 245M thưởng",
    url: "https://creator.tingnect.com",
    image: "https://creator.tingnect.com/Image/PreviewSeo/tingnecticon.png",
    keywords: [
      "Creator Lab 2024",
      "AI Tools miễn phí",
      "ChatGPT Premium free",
      "Canva Pro free", 
      "Midjourney free",
      "TingNect",
      "Content Creator Việt Nam",
      "Thu nhập online",
      "Kiếm tiền online 2024"
    ]
  }

  return NextResponse.json(metadata, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
    }
  })
}
import type { Metadata } from 'next'
import './globals.css'
import { TourProvider } from '@/components/OnboardingTour/TourProvider'
import type { Tour } from 'nextstepjs'
import NextStepWrapper from '@/components/OnboardingTour/NextStepWrapper'

// Định nghĩa các bước tour
const tourSteps: Tour[] = [
  {
    tour: 'creator-lab-onboarding',
    steps: [
      {
        icon: '🚀',
        title: 'Bắt đầu hành trình Creator ngay!',
        content: 'Đây là nút đăng ký quan trọng nhất! Click vào đây để điền form và nhận MIỄN PHÍ gói Creator Lab trị giá 39.338 triệu VNĐ. Hãy bắt đầu ngay để không bỏ lỡ cơ hội!',
        selector: '[data-tour="hero-cta"]',
        side: 'bottom',
        showControls: true,
        showSkip: true,
        pointerPadding: 15,
        pointerRadius: 12,
      },
      {
        icon: '🎁',
        title: 'Đăng ký ngay để nhận quyền lợi!',
        content: 'Cuối trang cũng có nút đăng ký tương tự. Bạn có thể click vào đây để điền form và nhận MIỄN PHÍ gói Creator Lab trị giá 39.338 triệu VNĐ sau khi xem hết các quyền lợi.',
        selector: '[data-tour="benefits-register"]',
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 15,
        pointerRadius: 12,
      },
      {
        icon: '📋',
        title: 'Khám phá 4 hệ thống thưởng',
        content: 'Click vào các tab này để xem chi tiết từng hệ thống: Creator Lab (39.338M), Level System (245M), Weekly Champion (39M), và Hoa Hồng 20%.',
        selector: '[data-tour="benefits-tabs"]',
        side: 'bottom',
        showControls: true,
        showSkip: true,
        pointerPadding: 12,
        pointerRadius: 10,
      },
      {
        icon: '💎',
        title: 'Creator Lab - Gói công cụ AI',
        content: 'Tab đầu tiên: Nhận MIỄN PHÍ 33+ công cụ AI và design pro như ChatGPT Premium, Canva Pro, Midjourney... trị giá 39.338M!',
        selector: '[data-tour="benefits-tab-0"]',
        side: 'bottom',
        showControls: true,
        showSkip: true,
        pointerPadding: 12,
        pointerRadius: 10,
      },
      {
        icon: '🏆',
        title: 'Hệ thống Level - 11 cấp độ',
        content: 'Tab thứ hai: Hệ thống 11 level với tổng thưởng 245M. Từ Level 0 đến Miss Creator, mỗi cấp có thưởng riêng!',
        selector: '[data-tour="benefits-tab-1"]',
        side: 'bottom',
        showControls: true,
        showSkip: true,
        pointerPadding: 12,
        pointerRadius: 10,
      },
      {
        icon: '👑',
        title: 'Weekly Champion - Giải tuần',
        content: 'Tab thứ ba: Mỗi tuần có 1 người thắng lớn! Top 1 vote sẽ nhận 39M gồm gói AI, PR và nhiều quyền lợi khác.',
        selector: '[data-tour="benefits-tab-2"]',
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 12,
        pointerRadius: 10,
      },
      {
        icon: '💰',
        title: 'Hoa hồng 20% - Thu nhập thụ động',
        content: 'Tab cuối: Nhận 20% hoa hồng KHÔNG GIỚI HẠN từ mọi vote trả phí. Càng nhiều vote, càng nhiều tiền mặt hàng tuần! Bạn đã khám phá xong tất cả quyền lợi. Hãy đăng ký ngay!',
        selector: '[data-tour="benefits-tab-3"]',
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 12,
        pointerRadius: 10,
      }
    ]
  }
]

export const metadata: Metadata = {
  metadataBase: new URL('https://creator.tingnect.com'),
  title: {
    default: 'TingVote Creator Lab - Nhận MIỄN PHÍ 39.338 Triệu VNĐ + Thu nhập 20%',
    template: '%s | TingVote Creator Lab'
  },
  description: '🔥 CREATOR LAB 2025 - Nhận MIỄN PHÍ gói 39.338 Triệu: 33+ AI Tools (ChatGPT, Canva Pro, Midjourney), Level System 245M, Weekly Champion 39M + Thu nhập 20% không giới hạn từ vote!',
  keywords: [
    'Creator Lab',
    'TingVote Creator Lab',
    'TingNect',
    'TingVote', 
    'nhận 39.338 triệu miễn phí',
    'gói creator lab 2024',
    'AI tools miễn phí',
    'ChatGPT Premium miễn phí',
    'Canva Pro miễn phí',
    'Midjourney miễn phí',
    'content creator Vietnam',
    'kiếm tiền online 2024',
    'hoa hồng 20%',
    'thu nhập thụ động',
    'vote kiếm tiền',
    'level system 245M',
    'weekly champion 39M',
    'làm content creator',
    'tools sáng tạo nội dung',
    'cộng đồng creator Việt Nam',
    'đăng ký creator lab',
    'miễn phí 100%'
  ],
  authors: [{ name: 'TingNect Team' }],
  creator: 'TingNect',
  publisher: 'TingNect',
  
  // Open Graph / Facebook
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://creator.tingnect.com',
    title: '🔥 TingVote Creator Lab - MIỄN PHÍ 39.338 Triệu + Thu nhập 20%',
    description: '🎁 NHẬN NGAY: 33+ AI Tools (ChatGPT Premium, Canva Pro, Midjourney) + Level System 245M + Weekly Champion 39M + Hoa hồng 20% không giới hạn! Đăng ký miễn phí 100%',
    siteName: 'TingVote Creator Lab - TingNect',
    images: [
      {
        url: 'https://creator.tingnect.com/Image/PreviewSeo/tingnecticon.png',
        width: 1200,
        height: 630,
        alt: 'TingVote Creator Lab - Nhận miễn phí 39.338 triệu VNĐ và 33+ AI Tools',
        type: 'image/png',
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: '🔥 TingVote Creator Lab 2024 - MIỄN PHÍ 39.338 Triệu + Thu nhập 20%',
    description: '🎁 33+ AI Tools + Level System 245M + Weekly 39M + Hoa hồng 20% không giới hạn. Đăng ký miễn phí 100%!',
    images: ['https://creator.tingnect.com/Image/PreviewSeo/tingnecticon.png'],
    creator: '@tingnect',
    site: '@tingnect',
  },
  
  // Icons
  icons: {
    icon: '/Image/PreviewSeo/tingnecticon.png',
    shortcut: '/Image/PreviewSeo/tingnecticon.png',
    apple: '/Image/PreviewSeo/tingnecticon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/Image/PreviewSeo/tingnecticon.png',
    },
  },
  
  // Manifest
  manifest: '/site.webmanifest',
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  
  // Additional meta tags
  category: 'technology',
  classification: 'business',
  
  // Alternates
  alternates: {
    canonical: 'https://creator.tingnect.com',
    languages: {
      'vi-VN': 'https://creator.tingnect.com',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        
        {/* Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
        
        {/* Additional SEO meta tags */}
        <meta name="theme-color" content="#F59E0B" />
        <meta name="msapplication-TileColor" content="#F59E0B" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Subdomain relationship */}
        <link rel="canonical" href="https://creator.tingnect.com" />
        <link rel="alternate" hrefLang="vi" href="https://creator.tingnect.com" />
        
        {/* Preload important resources */}
        <link rel="preload" href="/Image/PreviewSeo/tingnecticon.png" as="image" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Parent domain connection */}
        <meta name="parent-domain" content="tingnect.com" />
        <meta property="og:site_name" content="TingNect - Creator Lab" />
      </head>
      <body>
        <TourProvider>
          <NextStepWrapper steps={tourSteps}>
            {children}
          </NextStepWrapper>
        </TourProvider>
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Creator Lab 2024",
              "alternateName": "TingNect Creator Lab",
              "url": "https://creator.tingnect.com",
              "description": "Creator Lab 2024 - Nhận MIỄN PHÍ gói quyền lợi 39.338 triệu VNĐ: 33+ AI Tools + Level System 245M + Weekly Champion 39M + Thu nhập 20%",
              "publisher": {
                "@type": "Organization",
                "name": "TingNect",
                "url": "https://tingnect.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://creator.tingnect.com/Image/logo/tingnect-logo.png"
                },
                "sameAs": [
                  "https://facebook.com/tingnect",
                  "https://youtube.com/@tingnect",
                  "https://twitter.com/tingnect"
                ]
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://creator.tingnect.com/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
        
        {/* Offer Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Offer",
              "name": "Creator Lab 2024 - Gói 39.338 Triệu",
              "description": "Gói Creator Lab 2024 MIỄN PHÍ 39.338 triệu VNĐ: 33+ AI Tools (ChatGPT Premium, Canva Pro, Midjourney), Level System 245M, Weekly Champion 39M, Thu nhập 20% không giới hạn",
              "price": "0",
              "priceCurrency": "VND",
              "availability": "https://schema.org/InStock",
              "url": "https://creator.tingnect.com",
              "seller": {
                "@type": "Organization",
                "name": "TingNect"
              },
              "eligibleRegion": {
                "@type": "Place",
                "name": "Vietnam"
              }
            }),
          }}
        />
        
        {/* Course Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "TingVote Creator Lab - Chương trình Content Creator toàn diện",
              "description": "Chương trình TingVote Creator Lab - Đào tạo Content Creator chuyên nghiệp với 39.338 triệu VNĐ quyền lợi, 33+ AI Tools và thu nhập 20%",
              "provider": {
                "@type": "Organization",
                "name": "TingNect",
                "url": "https://tingnect.com"
              },
              "hasCourseInstance": {
                "@type": "CourseInstance",
                "courseMode": "online",
                "courseWorkload": "PT2H"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "VND",
                "availability": "https://schema.org/InStock"
              }
            }),
          }}
        />

        {/* Product Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "TingVote Creator Lab",
              "description": "Gói TingVote Creator Lab miễn phí 39.338 triệu VNĐ với 33+ AI Tools và thu nhập 20%",
              "image": "https://creator.tingnect.com/Image/PreviewSeo/tingnecticon.png",
              "brand": {
                "@type": "Brand",
                "name": "TingNect"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://creator.tingnect.com",
                "priceCurrency": "VND",
                "price": "0",
                "priceValidUntil": "2024-12-31",
                "availability": "https://schema.org/InStock",
                "seller": {
                  "@type": "Organization",
                  "name": "TingNect"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "1200",
                "bestRating": "5"
              }
            }),
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "TingVote Creator Lab có miễn phí 100% không?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Có! TingVote Creator Lab hoàn toàn MIỄN PHÍ 100%. Bạn sẽ nhận được gói quyền lợi trị giá 39.338 triệu VNĐ bao gồm 33+ AI Tools và cơ hội thu nhập 20% không cần đóng phí gì."
                  }
                },
                {
                  "@type": "Question", 
                  "name": "Gói 39.338 triệu bao gồm những gì?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Gói TingVote Creator Lab bao gồm: 33+ AI Tools (ChatGPT Premium, Canva Pro, Midjourney...), Level System với 245M thưởng, Weekly Champion 39M/tuần, Thu nhập 20% không giới hạn từ vote."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Làm sao để tham gia TingVote Creator Lab?", 
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Chỉ cần 3 bước đơn giản: 1) Điền form đăng ký trên website, 2) Chờ team xét duyệt, 3) Nộp thông tin ngân hàng để nhận thanh toán. Hoàn toàn miễn phí!"
                  }
                }
              ]
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization", 
              "name": "TingNect",
              "alternateName": "TingVote",
              "url": "https://tingnect.com",
              "logo": "https://creator.tingnect.com/Image/PreviewSeo/tingnecticon.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "Vietnamese"
              },
              "sameAs": [
                "https://facebook.com/tingnect",
                "https://youtube.com/@tingnect", 
                "https://twitter.com/tingnect"
              ],
              "foundingDate": "2023",
              "description": "TingNect - Nền tảng hỗ trợ Content Creator Việt Nam với TingVote Creator Lab và các công cụ AI miễn phí"
            }),
          }}
        />
      </body>
    </html>
  )
}

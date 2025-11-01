import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://creator.tingnect.com'),
  title: {
    default: 'Creator Lab - Nhận Gói 39 Triệu Miễn Phí | TingNect',
    template: '%s | Creator Lab TingNect'
  },
  description: 'Tham gia Creator Lab - Nhận MIỄN PHÍ Gói quyền lợi trị giá 39.5 Triệu: 50K thưởng, 200K vote, hỗ trợ truyền thông 5.95M, voucher giảm 98% tool AI. Chia 20% doanh thu không giới hạn!',
  keywords: [
    'Creator Lab',
    'TingNect',
    'TingVote',
    'nhận 39 triệu',
    'gói creator miễn phí',
    'sáng tạo nội dung',
    'content creator',
    'kiếm tiền online',
    'chia sẻ doanh thu 20%',
    'vote kiếm tiền',
    'tool AI miễn phí',
    'Canva Pro',
    'ChatGPT',
    'voucher giảm giá',
    'cộng đồng creator',
    'làm creator',
    'thu nhập thụ động'
  ],
  authors: [{ name: 'TingNect Team' }],
  creator: 'TingNect',
  publisher: 'TingNect',
  
  // Open Graph / Facebook
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://creator.tingnect.com',
    title: 'Creator Lab - Nhận Gói 39 Triệu Miễn Phí | TingNect',
    description: 'Nhận MIỄN PHÍ Gói 39.5 Triệu: Thưởng 50K, 200K vote, hỗ trợ truyền thông 5.95M, voucher 98% tool AI. Chia 20% doanh thu - Kiếm tiền không giới hạn từ nội dung sáng tạo!',
    siteName: 'Creator Lab - TingNect',
    images: [
      {
        url: '/Image/PreviewSeo/logo_hhsvhbvn.png',
        width: 1200,
        height: 630,
        alt: 'Creator Lab - Nhận Gói 39 Triệu Miễn Phí',
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Creator Lab - Nhận Gói 39 Triệu Miễn Phí | TingNect',
    description: 'Nhận MIỄN PHÍ Gói 39.5 Triệu: Thưởng 50K, 200K vote, hỗ trợ truyền thông 5.95M, voucher 98% tool AI. Chia 20% doanh thu không giới hạn!',
    images: ['/Image/PreviewSeo/logo_hhsvhbvn.png'],
    creator: '@tingnect',
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
        {children}
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Creator Lab",
              "alternateName": "TingNect Creator Lab",
              "url": "https://creator.tingnect.com",
              "description": "Chương trình Creator Lab - Nhận miễn phí gói quyền lợi trị giá 39.5 triệu VNĐ",
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
              "name": "Gói Creator Lab 39.5 Triệu",
              "description": "Gói quyền lợi Creator Lab miễn phí trị giá 39.5 triệu VNĐ bao gồm thưởng 50K, 200K vote, hỗ trợ truyền thông và voucher giảm 98%",
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
              "name": "Creator Lab - Chương trình đào tạo Content Creator",
              "description": "Chương trình đào tạo và hỗ trợ Content Creator với gói quyền lợi 39.5 triệu VNĐ",
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
      </body>
    </html>
  )
}

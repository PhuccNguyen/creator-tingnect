import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Creator Labs - Chương trình sáng tạo nội dung',
    template: '%s | Creator Labs'
  },
  description: 'Tham gia Creator Labs - Nhận thưởng 50.000đ ngay khi đăng ký. Học kỹ năng tạo nội dung, nhận chia sẻ 20% doanh thu và phần thưởng hàng tuần hấp dẫn.',
  keywords: [
    'Creator Labs',
    'TingNect',
    'sáng tạo nội dung',
    'content creator',
    'kiếm tiền online',
    'chia sẻ doanh thu',
    'phần thưởng',
    'video creator',
    'digital marketing',
    'social media'
  ],
  authors: [{ name: 'TingNect Team' }],
  creator: 'TingNect',
  publisher: 'TingNect',
  
  // Open Graph / Facebook
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://creator.tingnect.com',
    title: 'Creator Labs - Chương trình sáng tạo nội dung',
    description: 'Tham gia Creator Labs - Nhận thưởng 50.000đ ngay khi đăng ký. Học kỹ năng tạo nội dung, nhận chia sẻ 20% doanh thu và phần thưởng hàng tuần hấp dẫn.',
    siteName: 'Creator Labs',
    images: [
      {
        url: '/Image/logo/TingNect icon.png',
        width: 1200,
        height: 630,
        alt: 'Creator Labs - TingNect',
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Creator Labs - Chương trình sáng tạo nội dung',
    description: 'Tham gia Creator Labs - Nhận thưởng 50.000đ ngay khi đăng ký. Học kỹ năng tạo nội dung, nhận chia sẻ 20% doanh thu và phần thưởng hàng tuần hấp dẫn.',
    images: ['/Image/logo/TingNect icon.png'],
    creator: '@tingnect',
  },
  
  // Icons
  icons: {
    icon: '/Image/logo/TingNect icon.png',
    shortcut: '/Image/logo/TingNect icon.png',
    apple: '/Image/logo/TingNect icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/Image/logo/TingNect icon.png',
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
        <meta name="theme-color" content="#E7C873" />
        <meta name="msapplication-TileColor" content="#E7C873" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preload important resources */}
        <link rel="preload" href="/Image/logo/TingNect icon.png" as="image" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>
        {children}
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Creator Labs",
              "alternateName": "TingNect Creator Labs",
              "url": "https://creator.tingnect.com",
              "logo": "https://creator.tingnect.com/Image/logo/TingNect icon.png",
              "description": "Chương trình đào tạo Creator chuyên nghiệp với phần thưởng hấp dẫn",
              "sameAs": [
                "https://facebook.com/tingnect",
                "https://youtube.com/@tingnect",
                "https://twitter.com/tingnect"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+84-xxx-xxx-xxx",
                "contactType": "customer service",
                "availableLanguage": "Vietnamese"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "VN",
                "addressLocality": "Ho Chi Minh City"
              }
            }),
          }}
        />
      </body>
    </html>
  )
}

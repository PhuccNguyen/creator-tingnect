import './globals.css'

export const metadata = {
  title: 'TingVote Creator Lab',
  description: 'Trang tham gia chính thức dành cho Creator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  )
}

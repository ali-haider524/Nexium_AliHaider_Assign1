import "./globals.css"

export const metadata = {
  title: "Quote Generator",
  description: "Motivational Quote Generator App",
  icons: {
    icon: "/favicon.ico", //
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

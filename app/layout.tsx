import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Paso a través: El fin del duelo",
  description: "Paso a través: El fin del duelo",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="w-full h-full grid place-items-center overflow-hidden">
        {children}
      </body>
    </html>
  )
}

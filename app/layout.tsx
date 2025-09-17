import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/lib/theme-context"
import { PreventZoom } from "@/components/prevent-zoom"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Huong Lan Restaurant - Authentic Vietnamese Cuisine in Fresno",
  description: "Experience authentic Vietnamese cuisine in the heart of Fresno. Traditional flavors with fresh ingredients and time-honored recipes.",
  keywords: "Vietnamese restaurant, Fresno, authentic cuisine, pho, spring rolls, banh mi",
  viewport: "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=3, user-scalable=yes",
  themeColor: "#FF6B35",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Huong Lan Restaurant"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <PreventZoom />
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

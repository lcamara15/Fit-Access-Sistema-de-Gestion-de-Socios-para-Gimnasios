import "./globals.css"
import { Plus_Jakarta_Sans } from "next/font/google"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata = {
  title: "Fit Access",
  description: "Módulo de gestión de socios para Fit Access",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={plusJakarta.className}>{children}</body>
    </html>
  )
}



import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ltmventuresindia.com"),
  title: "LTM Ventures India LLP | Parent Company of WealthyStep",
  description: "LTM Ventures India LLP is the parent company of WealthyStep, dedicated to providing innovative financial and goal based investment solutions.",
  openGraph: {
    title: "LTM Ventures India LLP | Parent Company of WealthyStep",
    description: "LTM Ventures India LLP is the parent company of WealthyStep, dedicated to providing innovative financial and goal based investment solutions.",
    url: "https://ltmventuresindia.com",
    siteName: "LTM Ventures India LLP",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

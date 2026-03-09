import { Playfair_Display, Permanent_Marker, Inter, Caveat, Courier_Prime } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

const permanentMarker = Permanent_Marker({
  variable: "--font-permanent-marker",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Udaan Swan NGO",
  description: "Connecting hearts and creating futures.",
};

import Header from "../components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${permanentMarker.variable} ${inter.variable} ${caveat.variable} ${courierPrime.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

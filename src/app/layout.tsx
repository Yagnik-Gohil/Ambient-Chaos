import type { Metadata } from "next";
import { Protest_Strike, Yeseva_One } from "next/font/google";
import "./globals.css";

// Google Fonts
const protestStrike = Protest_Strike({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-protest-strike",
});

const yesevaOne = Yeseva_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-yeseva-one",
});

export const metadata: Metadata = {
  title: "Ambient Chaos",
  description: "Create a personalized ambient sound environment",
  icons: {
    icon: "/music.svg", // from public/music.svg
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${protestStrike.variable} ${yesevaOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

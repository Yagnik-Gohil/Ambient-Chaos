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
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Ambient Chaos: Create your own personalized ambient soundscape with rain, waves, lo-fi beats, and more."
        />
        <meta
          name="keywords"
          content="Ambient, Chaos, Relaxing Sounds, Lo-fi, Rain, Nature, Music, Meditation"
        />
        <meta name="author" content="Yagnik Gohil" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Ambient Chaos" />
        <meta
          property="og:description"
          content="Create your own ambient sound environment with customizable sounds and calming visuals."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ambient-chaos.yagnik.dev" />
        <meta
          property="og:image"
          content="https://ambient-chaos.yagnik.dev/preview.png"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ambient Chaos" />
        <meta
          name="twitter:description"
          content="Create your own ambient sound environment with customizable sounds and calming visuals."
        />
        <meta
          name="twitter:image"
          content="https://ambient-chaos.yagnik.dev/preview.png"
        />
        <meta
          name="google-adsense-account"
          content="ca-pub-3475130815736394"
        ></meta>
        <title>Ambient Chaos</title>

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3475130815736394"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body
        className={`${protestStrike.variable} ${yesevaOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

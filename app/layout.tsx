import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const BASE_URL = "https://mertozek.me";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Mert Özek — AI Engineer & Founder",
    template: "%s | Mert Özek",
  },
  description:
    "Computer Engineering student, AI Engineer, and Founder of StoryLiv. İTÜ Çekirdek BİGG accelerator. Passionate about AI, autonomous systems, n8n automation, and self-hosting.",
  keywords: [
    "AI Engineer",
    "StoryLiv",
    "Machine Learning",
    "ROS",
    "Autonomous Systems",
    "n8n",
    "İTÜ Çekirdek BİGG",
    "İTÜ Çekirdek",
    "Next.js",
    "Self-Hosting",
    "Mert Özek",
  ],
  authors: [{ name: "Mert Özek", url: BASE_URL }],
  creator: "Mert Özek",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Mert Özek",
    title: "Mert Özek — AI Engineer & Founder",
    description:
      "AI Engineer, Founder of StoryLiv, İTÜ Çekirdek BİGG accelerator. Building the future of AI-powered interactive experiences.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mert Özek — AI Engineer & Founder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mert Özek — AI Engineer & Founder",
    description:
      "AI Engineer, Founder of StoryLiv, İTÜ Çekirdek BİGG accelerator. Building the future of AI-powered interactive experiences.",
    creator: "@mertozek",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mert Özek",
  url: BASE_URL,
  sameAs: [
    "https://github.com/MT0100",
    "https://www.linkedin.com/in/mert-%C3%B6-243262198/",
    "https://twitter.com/mertozek",
    "https://blog.mertozek.me",
  ],
  jobTitle: "AI Engineer & Founder",
  worksFor: {
    "@type": "Organization",
    name: "StoryLiv",
    url: "https://storyliv.com",
  },
  description:
    "Computer Engineering student, AI Engineer, and Founder of StoryLiv. İTÜ Çekirdek BİGG accelerator. Passionate about AI, autonomous systems, and self-hosting.",
  image: `${BASE_URL}/images/profile.png`,
  email: "mert@mertozek.me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

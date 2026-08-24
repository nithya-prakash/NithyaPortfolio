import type { Metadata } from "next";
import { Archivo, Fraunces, Caveat } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const sansBody = Archivo({
  variable: "--font-sans-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const serifDisplay = Fraunces({
  variable: "--font-serif-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const scriptAccent = Caveat({
  variable: "--font-script-accent",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const siteUrl = "https://nithya-prakash.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Nithya Madalakote Prakash — AI Engineer",
  description:
    "AI Engineer building production-ready Generative AI, RAG, ML and intelligent software systems.",
  openGraph: {
    title: "Nithya Madalakote Prakash — AI Engineer",
    description:
      "AI Engineer building production-ready Generative AI, RAG, ML and intelligent software systems.",
    url: siteUrl,
    siteName: "Nithya Madalakote Prakash",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nithya Madalakote Prakash — AI Engineer",
    description:
      "AI Engineer building production-ready Generative AI, RAG, ML and intelligent software systems.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sansBody.variable} ${serifDisplay.variable} ${scriptAccent.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink font-sans antialiased selection:bg-accent selection:text-bg">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

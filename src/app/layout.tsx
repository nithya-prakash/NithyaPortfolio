import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import { LanguageProvider } from "@/lib/LanguageContext";
import "./globals.css";

const sansBody = Inter({
  variable: "--font-sans-body",
  subsets: ["latin"],
});

const monoCode = JetBrains_Mono({
  variable: "--font-mono-code",
  subsets: ["latin"],
});

const siteUrl = "https://nithya-prakash.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Nithya Madalakote Prakash — AI Engineer",
  description:
    "AI engineer building RAG, agent and ML systems, each with tests, evaluation numbers and honest limits.",
  openGraph: {
    title: "Nithya Madalakote Prakash — AI Engineer",
    description:
      "AI engineer building RAG, agent and ML systems, each with tests, evaluation numbers and honest limits.",
    url: siteUrl,
    siteName: "Nithya Madalakote Prakash",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nithya Madalakote Prakash — AI Engineer",
    description:
      "AI engineer building RAG, agent and ML systems, each with tests, evaluation numbers and honest limits.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sansBody.variable} ${monoCode.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink font-sans antialiased selection:bg-accent selection:text-bg">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

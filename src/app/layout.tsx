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

const siteUrl = "https://nithya-portfolio-silk.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  authors: [{ name: "Nithya Madalakote Prakash", url: siteUrl }],
  keywords: ["AI engineer", "RAG", "LLM agents", "MLOps", "machine learning", "Werkstudent", "Germany"],
  title: "Nithya Madalakote Prakash — AI Engineer",
  description:
    "AI engineer building RAG, agent and ML systems, each with tests, evaluation numbers and honest limits.",
  openGraph: {
    title: "Nithya Madalakote Prakash — AI Engineer",
    description:
      "AI engineer building RAG, agent and ML systems, each with tests, evaluation numbers and honest limits.",
    url: siteUrl,
    siteName: "Nithya Madalakote Prakash",
    locale: "en_US",
    alternateLocale: ["de_DE"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nithya Madalakote Prakash — AI Engineer",
    description:
      "AI engineer building RAG, agent and ML systems, each with tests, evaluation numbers and honest limits.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nithya Madalakote Prakash",
  jobTitle: "AI Engineer",
  url: siteUrl,
  email: "mailto:nithyamadalakoteprakash12@gmail.com",
  sameAs: ["https://github.com/nithya-prakash", "https://www.linkedin.com/in/nithya-prakash1209/"],
  alumniOf: { "@type": "CollegeOrUniversity", name: "Brandenburg University of Technology Cottbus-Senftenberg" },
  knowsAbout: ["Retrieval-augmented generation", "LLM agents", "MLOps", "Machine learning", "Computer vision"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sansBody.variable} ${monoCode.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink font-sans antialiased selection:bg-accent selection:text-bg">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { ScrollToTop } from "./components/layout/ScrollToTop";
import { PageTransition } from "./components/animations/PageTransition";

// Geometric grotesque display — technical instrument-console feel.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteDescription =
  "Stop context-switching between Cursor, terminal, and chat. One orchestration layer to rule them all. Build, deploy, and manage AI agents from a single interface.";

export const metadata: Metadata = {
  title: "AgentDesk — Orchestrate AI Agents Above Your Tools",
  description: siteDescription,
  applicationName: "AgentDesk",
  metadataBase: new URL("https://agentdesk.dev"),
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    siteName: "AgentDesk",
    title: "AgentDesk — Orchestrate AI Agents Above Your Tools",
    description: siteDescription,
    images: [{ url: "/logo.png", width: 1278, height: 1230, alt: "AgentDesk signal mark" }],
  },
  twitter: {
    card: "summary",
    title: "AgentDesk — Orchestrate AI Agents Above Your Tools",
    description: siteDescription,
    images: ["/logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#131417" },
    { media: "(prefers-color-scheme: light)", color: "#f3f1ec" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <div className="noise-overlay" aria-hidden />
        <Providers>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Header />
          <PageTransition>
            <main id="main-content">{children}</main>
          </PageTransition>
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
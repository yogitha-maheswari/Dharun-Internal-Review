import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../components/Providers";
import { Toaster } from "../components/ui/toaster";
import { Toaster as Sonner } from "../components/ui/sonner";

export const metadata: Metadata = {
  title: "Dharun - Internal Review",
  description: "A confidential performance evaluation analyzing growth, resilience, ambition, and the truth behind the metrics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <Providers>
          {children}
          <Toaster />
          <Sonner />
        </Providers>
      </body>
    </html>
  );
}

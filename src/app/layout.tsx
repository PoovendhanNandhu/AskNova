import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AskNova - Agentic AI",
  description: "AskNova turns your prompt into a live, automated landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

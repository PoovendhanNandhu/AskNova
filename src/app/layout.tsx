import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AskNova - Aceternity UI Integration",
  description: "Next.js app with Aceternity UI components",
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

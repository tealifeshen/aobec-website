import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AOBEC | Global Energy Solutions",
  description: "Complete energy, industrial and global supply chain solutions for international projects.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from '../styles/GamePlayArea.module.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tap Tap Pancake",
  description: "A fun tapping game about making pancakes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${styles.noSelect}`}>{children}</body>
    </html>
  );
}
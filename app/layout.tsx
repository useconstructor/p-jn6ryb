import type { Metadata } from "next";
import { Crimson_Text, Inter } from "next/font/google";
import "./globals.css";

const serif = Crimson_Text({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--serif" });
const sans = Inter({ subsets: ["latin"], variable: "--sans" });
export const metadata: Metadata = { title: "Ember & Craft | Specialty Coffee", description: "Fresh small batch coffees, brewing education, and tasting experiences." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${serif.variable} ${sans.variable}`}>{children}</body></html>; }

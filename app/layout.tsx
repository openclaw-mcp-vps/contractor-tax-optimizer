import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contractor Tax Optimizer – Track Deductible Expenses for 1099 Contractors",
  description: "Automatically categorize business expenses from bank and credit card feeds and calculate quarterly tax savings. Built for freelancers and contractors earning $50k+."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6f97c516-0a06-41ae-8004-a7b519dec239"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}

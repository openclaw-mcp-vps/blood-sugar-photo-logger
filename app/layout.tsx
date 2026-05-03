import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GlucoSnap – Log Blood Sugar by Photo",
  description: "Photograph your glucose meter and let OCR automatically log your readings with trend charts. Built for diabetics and caregivers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="cbbd8352-283e-477e-87f6-78aae95a62f9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}

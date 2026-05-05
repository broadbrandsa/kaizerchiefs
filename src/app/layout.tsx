import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KC Mobile MVNO Launch Proposal",
  description:
    "Kaizer Chiefs Mobile (KC Mobile) MVNO launch proposal — interactive financial model anchored to the KCM Digital Mobile numbers, with named-supplier costings, audience research and downloadable PDF.",
  authors: [{ name: "DSG (Digital Strategy Group)" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}

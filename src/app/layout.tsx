import type { Metadata } from "next";
import { VercelToolbar } from "@vercel/toolbar/next";
import "./globals.css";
import { LockScreen } from "@/components/lock-screen";

export const metadata: Metadata = {
  title: "KC Mobile MVNO Launch Proposal",
  description:
    "Kaizer Chiefs Mobile (KC Mobile) MVNO launch proposal — V2 financial model anchored to the KCM Digital Mobile numbers, with named-supplier costings, persona research, 8 non-comparable CVPs and downloadable PDF.",
  authors: [{ name: "DSG (Digital Strategy Group)" }],
};

const shouldInjectToolbar =
  process.env.NODE_ENV === "development" ||
  process.env.VERCEL_ENV === "preview";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body>
        <LockScreen>{children}</LockScreen>
        {shouldInjectToolbar && <VercelToolbar />}
      </body>
    </html>
  );
}

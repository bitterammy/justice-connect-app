import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Providers from "@/components/Providers";
import { getSettings } from "@/lib/db";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const jost = Jost({ subsets: ["latin"], variable: "--font-body", display: "swap", weight: ["300", "400", "500", "600"] });

export const metadata = {
  title: "Justice Connect — Find a USA Attorney You Can Trust",
  description:
    "Justice Connect is a free USA attorney directory. Search by state and practice area, read guides, and connect with real attorneys — free listings for law firms.",
};

export default async function RootLayout({ children }) {
  let settings = {};
  try { settings = await getSettings(); } catch { /* db not configured yet */ }
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${jost.variable}`}>
        <Providers>
        {settings.announcement ? (
          <div className="announcement-bar">{settings.announcement}</div>
        ) : null}
        <SiteHeader siteName={settings.site_name || "Justice Connect"} />
        <main className="main">{children}</main>
        <SiteFooter
          siteName={settings.site_name || "Justice Connect"}
          contactEmail={settings.contact_email || ""}
          contactPhone={settings.contact_phone || ""}
        />
        </Providers>
      </body>
    </html>
  );
}

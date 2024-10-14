import type { Metadata } from "next";
import { redHatDisplay } from "./ui/fonts";
import "@/app/ui/styles/global.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Partybank",
    default: "Partybank",
  },
  description: "Where Every Ticket Holds A Celebration",
  metadataBase: new URL("https://organizer.thepartybank.com/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${redHatDisplay.className} antialiased`}>
        {children}
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBClqTiVBDejbzvcHLcUhheuMM5U50eXTE&libraries=geometry,places"></script>
      </body>
    </html>
  );
}

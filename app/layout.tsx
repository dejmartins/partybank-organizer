import type { Metadata } from "next";
import { redHatDisplay } from "./ui/fonts";
import "@/app/ui/styles/global.css";
import Providers from "@/store/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Partybank",
    default: "Partybank",
  },
  description: "Where Every Ticket Holds A Celebration",
  metadataBase: new URL("https://organizer.thepartybank.com/"),
  icons: {
    icon: '/partybank.png'
  }
};
const mapkey = process.env.NEXT_PUBLIC_MAP_API_KEY;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${redHatDisplay.className} antialiased`}>
        <Providers>{children}</Providers>
        <ToastContainer hideProgressBar autoClose={5000} position="top-right" />
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=${mapkey}&libraries=geometry,places`}
          async
        ></script>
      </body>
    </html>
  );
}

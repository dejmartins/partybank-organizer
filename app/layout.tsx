import type { Metadata } from "next";
import { redHatDisplay } from "./ui/fonts";
import "@/app/ui/styles/global.css";
import Providers from "@/store/provider";
import { ToastContainer } from "react-toastify";

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
        <Providers>{children}</Providers>
        <ToastContainer
          hideProgressBar
          autoClose={1000}
          position="bottom-center"
        />
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBqR9iuBHfJF1u_uZEjGV_NMMsmD0Di1l8&libraries=geometry,places"></script>
      </body>
    </html>
  );
}

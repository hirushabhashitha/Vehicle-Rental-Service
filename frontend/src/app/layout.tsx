import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./client-body";

export const metadata: Metadata = {
  title: "Driftway — Move Freely",
  description: "Book dependable cars, scooters, and vans for your next Sri Lankan escape with Driftway.",
  keywords: "Driftway, vehicle rental, Sri Lanka, scooter rental, car rental, van rental, travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}

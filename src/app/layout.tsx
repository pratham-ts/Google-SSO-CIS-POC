"use client";

import { SessionProvider } from "next-auth/react";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
  params: { session },
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}

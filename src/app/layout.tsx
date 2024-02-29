"use client";

import { SessionProvider } from "next-auth/react";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout({
  children,
  params: { session },
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body>
        <Toaster />
        <SessionProvider session={session}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

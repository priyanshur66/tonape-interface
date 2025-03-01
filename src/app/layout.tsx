'use client';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {THEME,TonConnectUIProvider} from "@tonconnect/ui-react";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
      <TonConnectUIProvider
          manifestUrl="https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json"

      >
     {children}
      </TonConnectUIProvider>
      </body>
    </html>
  );
}

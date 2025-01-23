import type { Metadata } from "next";

import "./globals.css";
import Nav from "@/components/Nav/Nav";





export const metadata: Metadata = {
  title: "WeSupplyIt ",
  description: "WeSupplyIt website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={""}>
      <head>
     
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
     <meta name="theme-color" content="#39D8FC" />
      </head>
      <body>
       
        {children}
      </body>
    </html>
  );
}

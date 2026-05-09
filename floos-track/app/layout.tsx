"use client";
import NavigationMenu from "@/components/navigation-menu/navigation-menu";
import "./global.css";
import Providers from "@/providers/queryProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavigationMenu />
          {children}
        </Providers>
      </body>
    </html>
  );
}

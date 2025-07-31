import type { Metadata } from "next";
import "./globals.css";
import { BreadcrumbProvider } from "./context/BreadcrumbContext";
import Header from "./components/layout/Header";

export const metadata: Metadata = {
  title: "Grade Calculator",
  description: "Grade calculator made by Amelia Song",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`antialiased flex flex-col h-full gap-6 p-8`}>
        <BreadcrumbProvider>
          <Header/>
            <div className="w-full h-full rounded-4xl bg-gray-100">
              {children}
            </div>
        </BreadcrumbProvider>
      </body>
    </html>
  );
}

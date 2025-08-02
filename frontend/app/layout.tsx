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
      <body className={`antialiased h-full`}>
          <BreadcrumbProvider>
            <div className="flex flex-col w-full h-full gap-6 p-8 bg-[url('/backgrounds/bg-1.jpg')] bg-cover bg-center">
              <Header/>
              <div className="w-full h-full p-8 rounded-4xl bg-white/50 backdrop-blur-md ring-1 ring-white/80">
                {children}
              </div>
            </div>
          </BreadcrumbProvider>
      </body>
    </html>
  );
}

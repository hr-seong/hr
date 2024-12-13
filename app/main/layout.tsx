import React from "react";
import { Metadata } from "next";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export const metadata: Metadata = {
  title: "ormakgil",
  description: "ormakgil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="container main">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}

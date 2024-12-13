import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ormakgil-guide",
  description: "ormakgil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

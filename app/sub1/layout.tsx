import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container sub">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

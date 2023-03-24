import "antd/dist/antd.css";
// import Footer from "./components/footer/Footer";
// import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import Navbar from "./components/navbar/navbar";

export const metadata = {
  title: {
    default: "Live",
    template: "%s | Live",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head />
      <body>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}

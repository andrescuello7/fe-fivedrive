import "antd/dist/antd.css";
import "./globals.css";

export const metadata = {
  title: {
    default: "firedrive",
    template: "%s | Firedrive",
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
        {children}
      </body>
    </html>
  );
}

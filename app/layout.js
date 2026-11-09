import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL("https://example.com"),
  title: { default: "Matchstick Design Studio | Graphic Design Studio in Pune", template: "%s | Matchstick Design Studio" },
  description: "Matchstick Design Studio is a graphic design studio in Sadashiv Peth, Pune. Initial structure-first website prototype.",
  openGraph: { title: "Matchstick Design Studio", description: "Graphic design studio in Sadashiv Peth, Pune.", type: "website" },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body><Navbar />{children}<Footer /></body></html>;
}

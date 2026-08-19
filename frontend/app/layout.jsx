import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata = {
  title: "Eejak Technologies",
  description: "Modern digital solutions",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata = {
  title: "Eejak Technologies",
  description: "Modern digital solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main style={{ paddingTop: "80px" }}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
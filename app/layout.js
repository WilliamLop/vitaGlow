// import Nav from "@components";
// import Footer from "@components";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./globals.css";
import BtnWhatsApp from '../components/BtnWhatsApp';

export const metadata = {
  title: "Gano Coffe",
  description: "Landing page for  Gano Coffee, a coffee shop in the heart of Portland.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative font-poppins">
        <Nav />
            <BtnWhatsApp />
          <main className="">
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}

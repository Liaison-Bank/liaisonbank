import Header from '../components/Header'
import Footer from '../components/Footer'
import Cursor from "@/components/Cursor";
import AOSProvider from '@/components/AOSProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@flaticon/flaticon-uicons/css/all/all.css";
import "@fontsource/josefin-sans";
import "@/assets/scss/globals.scss";
import ReduxProvider from '@/components/ReduxProvider'; // Adjust path as needed
// import ParticlesBackground from "@/components/ParticlesBackground";

export const metadata = {
  title: "Liaisonbank",
  description: "Liaison Bank was founded in 2007 as Mr. Mahadev Biradar Consulting. Cut to 2024, we have evolved into a versatile and experienced entity as Liaison Bank. In the realm of licensing and liaison services, we stand out as a leading organization, boasting an extensive workforce of highly quality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
      </head>
      <body className="flex flex-col min-h-screen bg-gray-50">
        <ReduxProvider>
          <Cursor />
          {/* <ParticlesBackground /> */}
          <AOSProvider>
            <Header />
            <main className="flex-grow">

              {children}
            </main>
          </AOSProvider>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}

import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Bootstrap from '../libs/Bootstrap';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TopNav from '@/components/TopNav';
// import FooterSection from '../components/FooterSection';
import TawkToWidget from '@/components/TawkToWidget';
import WhatsAppButton from '@/components/WhatsAppButton';




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="d-flex flex-column min-vh-100">
        <Bootstrap />
        <TawkToWidget/>
        <WhatsAppButton/>
        <TopNav />
        <Navbar />
        <main className="flex-grow-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
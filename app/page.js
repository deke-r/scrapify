export const metadata = {
  title: "Scrapify – Bulk Scrap & E-Waste Pickup in NCR",
  description:
    "Book certified scrap and e-waste pickup for homes, societies, and industries in Delhi NCR. Instant payment, GST billing, and eco-friendly disposal.",
  keywords:
    "bulk scrap pickup Delhi-NCR, online kabadiwala Noida, scrap dealer Gurugram, e-waste collection Ghaziabad, scrap buyers Faridabad, industrial scrap Delhi NCR, kabadiwala for companies, commercial scrap buyers, scrap pickup NCR, scrapify booking, instant scrap payment, online scrap collection, recycling service India, online kabadiwala,Best Online Kabadiwala In Delhi-NCR, Scrap dealers in Delhi-NCR",
  alternates: {
    canonical: "https://scrapify.in/",
  },
  openGraph: {
    title: "Scrapify – Bulk Scrap & E-Waste Pickup in NCR",
    description:
      "Book scrap & e-waste pickup in Delhi NCR. Instant payment, GST invoice, trusted by industries & societies.",
    url: "https://scrapify.in/",
    siteName: "Scrapify",
    images: [
      {
        url: "https://scrapify.in/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Scrapify Bulk Scrap Pickup",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scrapify – Bulk Scrap & E-Waste Pickup in NCR",
    description:
      "Certified scrap & e-waste pickup for societies, companies & industries in NCR. Instant payout & GST billing.",
    images: ["https://scrapify.in/og-cover.jpg"],
    creator: "@scrapify",
  },
};

import Banner from "@/components/Banner";
import FloatingForm from "@/components/FloatingForm";
import MultiStepForm from "@/components/multi-step-form"
import WhyRecycleBaba from "@/components/why-scrapify"
import HowItWorks from "@/components/how-it-works"
import PricingCards from "@/components/pricing-cards"
import CallToAction from "@/components/call-to-action"
import Testimonials from "@/components/Testimonials";
import ServicesOverview from "@/components/ServicesOverview";
export default function Page() {
  return (
    <>
      <Banner />
      <FloatingForm />
      <ServicesOverview/>
      <WhyRecycleBaba />
      <HowItWorks />
      <Testimonials/>
    </>
  );
}